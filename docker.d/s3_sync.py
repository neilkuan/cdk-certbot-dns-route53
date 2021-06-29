import boto3
import os
from botocore.exceptions import ClientError
from datetime import datetime, timezone, timedelta
s3resource = boto3.resource('s3')
bucket_name = os.getenv('BUCKET_NAME')
domain_name = os.getenv('DOMAIN_NAME')

# what time is it ??
def what_time_is():
    time = datetime.now()
    date_time = str(time).split(' ')[0]
    return date_time

def sync_certificat_to_s3():
    try:
      domain_list = domain_name.split('.')[-2:]
      domain_name_dir = '.'.join(domain_list)
      print('your domain is '+ domain_name_dir)
      print(what_time_is())
      print(f'Start to sync fullchain.pem to {bucket_name} !!!'.format(bucket_name))
      s3resource.Object(bucket_name, f'{what_time_is()}/fullchain.pem'.format(what_time_is())).put(Body=open(f'/tmp/live/{domain_name_dir}/fullchain.pem'.format(domain_name_dir), 'rb'))
      
      print(f'Start to sync privkey.pem to {bucket_name} !!!'.format(bucket_name)) 
      s3resource.Object(bucket_name, f'{what_time_is()}/privkey.pem'.format(what_time_is())).put(Body=open(f'/tmp/live/{domain_name_dir}/privkey.pem'.format(domain_name_dir), 'rb'))
      
      print('Sync Completed !!!')
    except ClientError as err:
      print(err)

if  __name__ == '__main__':
   sync_certificat_to_s3()