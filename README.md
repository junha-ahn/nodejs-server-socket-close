`TCP/IP` 연결종료 과정과 패킷을 보기 위한 프로젝트

- 특히 서버가 먼저 소켓 연결을 끊는게 목표다.

## How to Run

```
docker-compose up --build
```

## How to use

```
> docker exec -it  server_app /bin/bash

root# tshark -i eth0
```

## src/client.js 13 line

if You change the `GET` request route, you can try different ways to close the socket

- `instance.get("/socket-destory")`
- `/`, `/socket-close`, `/socket-destroy`

