import os
import datetime
import boto3
import sys
from certbot.main import main
import json
sys.path.append('/var/task')
def handler(events, contexts):
  events = events
  contexts = contexts
  DOMAIN_NAME=os.getenv('DOMAIN_NAME')
  MAIL=os.getenv('EMAIL')
  BUCKET_NAME = os.getenv('BUCKET_NAME')

  print('start to renew cert from route53...')
  try:
    main(['certonly', '--agree-tos',
                        '--dns-route53', 
                        '-d', DOMAIN_NAME,
                        '-m', MAIL,
                        '--no-eff-email', 
                        '--config-dir', '/tmp',
                        '--work-dir', '/tmp',
                        '--logs-dir', '/tmp',
                        ])
  except Exception as e:
      print(e)
      return json.dumps({
       "message": f'Execute certbot command fail {e}'
     })

  today = datetime.date.today()
  CUSTOM_PREFIX_DIRECTORY= os.getenv('CUSTOM_PREFIX_DIRECTORY')
  s3_path = ''
  if CUSTOM_PREFIX_DIRECTORY == None:
    print('CUSTOM_PREFIX_DIRECTORY is not set')
    print(f'S3_PATH is set to {today}')
    s3_path = f'{today}/'
  elif CUSTOM_PREFIX_DIRECTORY == '/':
    print('S3_PATH is set to /')
    s3_path = ''
  else:
    print('S3_PATH CUSTOM_PREFIX_DIRECTORY is set')
    s3_path = f'{CUSTOM_PREFIX_DIRECTORY}/'
  print('sync file to S3 bucket s3://{BUCKET_NAME}/{S3_PATH}')
  
  client = boto3.client('s3')
  domain_path = domain_path_helper(DOMAIN_NAME)
  dirs = os.listdir(f'/tmp/live/{domain_path}')
  for file_name in dirs:
    try:
      client.upload_file('/tmp/live/' + domain_path + '/' + file_name, BUCKET_NAME, s3_path + domain_path + '/' + file_name)
    except Exception as e:
      print(e)
      
      return json.dumps({
       "message": f'{e}'
     })
  if s3_path == '':
    print(f'find your certificates in your bucket s3://{BUCKET_NAME}/{domain_path}') 
    return json.dumps({
       "message": f'find your certificates in your bucket s3://{BUCKET_NAME}/{domain_path}'
     })
  else:
    print(f'find your certificates in your bucket s3://{BUCKET_NAME}/{s3_path}/{domain_path}') 
    return json.dumps({
       "message": f'find your certificates in your bucket s3://{BUCKET_NAME}/{s3_path}/{domain_path}'
     })    
  
  

def domain_path_helper(domain: str):
  d = domain.split('.')
  try:
    d.remove('*')
  except:
    pass
  r = '.'.join(d)
  return r
