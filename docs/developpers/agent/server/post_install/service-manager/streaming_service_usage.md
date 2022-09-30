# Streaming Transcription service usage
Streaming speech to text standalone worker. Processes audio streams on an WS endpoint 

## WS to server

### Establish connection
Initiate the server connection by sending a json message.
`{"config": {"sample_rate":16000, "metadata":1 }}`

Option : 
  - sample_rate
  - metadata : 
    - `1` : application/json
    - `0` : text/plain

### Sending audio

After the connection is established, you can send an audio stream to the server.

Tested audio format : 
  - format : 16-bit binary string
  - channels : 1
  - rate : 16000 (make sure the rate is the same as the one used initially)
  - buffer_size : 1024 (can be any integer)


Python example `audio.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=1024)`

### Ending session 
Send a `{"eof" : 1}` message to end the session.

## Server to WS

### Response to an audio stream

```json
{"partial": "one"}
{"partial": "one sentence"}
{"partial": "one sentence of"}
{"partial": "one sentence of user"}
```

### Response to an audio stream after a silence duration (~0.5s)
`{"text": "one sentence of user"}`

### Response after ending session 
The server will send after an `{"eof" : 1}` (depending of the initial metadata)
- metadata 0 : text/plain
- metadata 1 : `{"speakers": [], "text": "", "words": []}`

Finally, the server will close the connection