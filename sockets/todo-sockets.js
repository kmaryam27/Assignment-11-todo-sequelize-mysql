/**
 * @author Maryam Keshavarz
 */
module.exports = function(io) {
    io.on('connection', (socket) => {
      
        socket.on('new-task', (data) => {
            io.emit('emit-task', data);
        });

        socket.on('update-task', (data) => {
            io.emit('emit-task', data);
        });

        socket.on('delete-task', (data) => {
            io.emit('emit-task', data);
        });

    });
  }



