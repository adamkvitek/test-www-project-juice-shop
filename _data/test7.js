const a = "cGVyZm9ybWFuY2U6cGVyZm9ybWFuY2U="
 
useEffect(() => {
   axios
     .get("https://api.github.com/users/person/repos", {
        // ruleid: hardcoded-basic-token
       Authorization: "Basic " + a,
     })
     .get("https://api.github.com/users/person/repos", {
        // ruleid: hardcoded-basic-token 
       Authorization: "Basic cGVyZm9ybWFuY2U6cGVyZm9ybWFuY2U=",
     })
     .get("https://api.github.com/users/person/repos", {
        // ok: hardcoded-basic-token
       Authorization: "Basic example",
     })
     .get("https://api.github.com/users/person/repos", {
        // ok: hardcoded-basic-token
       Authorization: "Basic" + config['githubtoken'],
     })
     .then((res) => {
       setProjects(res.data);
     });
 }, []);
