import Service from '@ember/service';

export default Service.extend({
  
  authenticate(loginName, password)   {

    var api = this.apiAdapter;

    return api.authorize.post(loginName, password, '5F43560D-9B0C-4F3C-85CB-B5721D098F7B')
      .done(function(data) {
        api.setAccessToken(data.access_token);
        //this.set('token', data.access_token);
      })
      .fail(function() {          
        // Authorization failed
        alert("Login to Bimplus failed!");
      });
  }
});
