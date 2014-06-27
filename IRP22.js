if (Meteor.isClient) {
  Router.map(function() {
    this.route('a', {
      path: '/',
      data: "A's data"
    });
    
    this.route('b', {
      waitOn: function() {
        return Meteor.subscribe('superslowsub')
      },
      data: "B's data"
    });
  })
}

if (Meteor.isServer) {
  Meteor.publish('superslowsub', function() {
    var self = this;
    
    // wait 10 seconds
    Meteor.setTimeout(function() {
      self.ready()
    }, 10000);
  })
}
