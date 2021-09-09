#!/bin/bash
DOMAIN_NAME=$DOMAIN_NAME
MAIL=$EMAIL

echo "start to renew cert from route53"
certbot certonly --agree-tos \
--dns-route53 \
--dns-route53-propagation-seconds 30 \
-d ${DOMAIN_NAME} -m ${MAIL} --eff-email --config-dir /tmp --work-dir /tmp --logs-dir /tmp
sleep 30
TODAY=$(date +"%Y-%m-%d")

echo "sync file to S3 bucket"
aws s3 sync /tmp/live/ s3://${BUCKET_NAME}/${TODAY}/
