from flask import Flask
import socket
import pickle
import json 
import time
UDP_IP_ADDRESS = "127.0.0.1"
UDP_PORT_NO = 12347
app = Flask(__name__)

@app.route('/time')
def get_current_time():
    z={'time': time.time()}
    print(type(z))
    print(z)
    return z

@app.route('/udpServer')
def udp_receive():
  s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
  s.bind((UDP_IP_ADDRESS, UDP_PORT_NO))
  while True:
    data, addr = s.recvfrom(4096)
    data2=pickle.loads(data)
    return(data2)
     
    
    
  


  
 
    