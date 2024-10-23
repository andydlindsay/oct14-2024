# W02D03 - Networking with TCP and HTTP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo

### Networking
* machines that are connected to one another can talk to one another
* ISP

### Address
* unique address
* Internet Proctocol (IP)
* IPv4 192.168.7.7 0.0.0.0 255.255.255.255
* IPv6 2001:db8:3333:4444:5555:6666:7777:8888
* street address of the computer

### Port
* uniquely identifies a running process on the computer
* 65,535 ports to choose from
  * 80 HTTP
  * 443 HTTPS
  * 22 SSH
  * 5432 Postgres
  * cannot use anything < 1000
  * dev 3000-9000

### Packets
* broken into multiple packets
* 500 pieces
* packet => header (destination, origin, what type of data are we sending)

### TCP
* Transmission Control Protocol
* guaranteed => 3-way handshake
* error recovery 1/500 2/500 3/500
* packets arrive in order (reordered on arrival)

### UDP
* User Datagram Protocol
* connectionless
* no error recovery
* no reorder of packets

server => have information
client => want information

### Event-driven Programming
* code does not run on server start
* only runs in response to certain events occurring

```js
button.on('click', () => {});
server.on('connection', () => {});
```

```js
arr.forEach((element) => {})
```

😂😂😂😂😂😂

Computer stores letters as numbers

a = 5
b = 6

encoding


```js
const data = "Set name: alice"
data.includes('Set name:'); // they want to set their name

"Move: up"
"Move: down"
"Move: left"
"Move: right"
data.includes('Move:'); // run the move command
```

connection.write('Move: up');