import requests
import datetime
import concurrent.futures

from dotenv import load_dotenv, dotenv_values

HOST = 'http://127.0.0.1:4000/'
API_PATH = 'api/v1/resources/files/video/kek.mp4'
ENDPOINT = HOST + API_PATH
MAX_THREADS = 50
CONCURRENT_THREADS = 2000

def main():
    def send_api_request():
        print ('Sending API request: ', ENDPOINT)
        r = requests.get(ENDPOINT)
        print ('Received: ', r.status_code, r.text)

    start_time = datetime.datetime.now()
    print ('Starting:', start_time)


    with concurrent.futures.ThreadPoolExecutor(MAX_THREADS) as executor:
        futures = [ executor.submit(send_api_request) for x in range (CONCURRENT_THREADS) ]

    import time
    time.sleep(5)
    end_time = datetime.datetime.now()
    print ('Finished start time:', start_time, 'duration: ', end_time-start_time)

if __name__ == "__main__":
    main()
