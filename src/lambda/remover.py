import boto3
import os


# CONFIG
STACK_NAME = os.getenv("STACK_NAME")
client = boto3.client('cloudformation')


def remove_stack(stack: str):
    response = client.delete_stack(
        StackName=stack
    )
    return response


def handler(event, context):
    print(remove_stack(STACK_NAME))


if __name__ == '__main__':
    handler(None, None)
