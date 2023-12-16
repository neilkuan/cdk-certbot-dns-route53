FROM public.ecr.aws/lambda/python:3.12

RUN pip3 install certbot-dns-route53 awscli

COPY bootstrap /var/runtime/bootstrap
COPY function.sh /var/task/function.sh
COPY main.sh /var/task/main.sh
RUN chmod +x /var/runtime/bootstrap /var/task/function.sh /var/task/main.sh

WORKDIR /var/task
CMD [ "function.sh.handler" ]