var request = new XMLHttpRequest();
var version;

request.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    version = JSON.parse(this.responseText)[0].name;
  }
};
request.open('GET', 'https://api.github.com/repos/PascaleBeier/bootstrap-validate/tags', true);
request.send();

