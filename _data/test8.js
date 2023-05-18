const a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
 
useEffect(() => {
   axios
     .get("https://api.github.com/users/person/repos", {
        // ruleid: hardcoded-bearer-token
       Authorization: "Bearer " + a,
     })
     .get("https://api.github.com/users/person/repos", {
        // ruleid: hardcoded-bearer-token 
       Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
     })
     .get("https://api.github.com/users/person/repos", {
        // ok: hardcoded-bearer-token
       Authorization: "Bearer example",
     })
     .get("https://api.github.com/users/person/repos", {
        // ok: hardcoded-bearer-token
       Authorization: "Bearer" + config['githubtoken'],
     })
     .then((res) => {
       setProjects(res.data);
     });
 }, []);


fetch('URL_GOES_HERE', { 
    method: 'post', 
    headers: new Headers({
      // ruleid: hardcoded-bearer-token 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', 
        'Content-Type': 'application/x-www-form-urlencoded'
    }), 
    body: 'A=1&B=2'
});