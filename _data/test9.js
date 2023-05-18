const a = "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"
 
useEffect(() => {
   axios
     .get("https://api.github.com/users/person/repos", {
        // ruleid: hardcoded-github-token  
       Authorization: "Bearer " + a,
     })
     .get("https://api.github.com/users/person/repos", {
        // ruleid: hardcoded-github-token  
       Authorization: "Bearer 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",
     })
     .get("https://api.github.com/users/person/repos", {
        // ruleid: hardcoded-github-token  
       Authorization: "Bearer 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",
     })
     .get("https://api.github.com/users/person/repos", {
        // ok: hardcoded-github-token  
       Authorization: "Bearer ghp_example____reeee",
     })
     .get("https://api.github.com/users/person/repos", {
        // ok: hardcoded-github-token  
       Authorization: "Bearer" + config['githubtoken'],
     })
     .then((res) => {
       setProjects(res.data);
     });
 }, []);


const fetchUsers = async () => {
const response = await fetch("https://api.github.com/users", {
    headers: {
    // ruleid: hardcoded-github-token 
    Authorization: "token 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",
    }
})}

const fetchUsers = async () => {
const response = await fetch("https://api.github.com/users", {
    headers: {
    // ruleid: hardcoded-github-token 
    Authorization: "token "+a,
    }
})}

const fetchUsers = async () => {
const response = await fetch("https://api.github.com/users", {
    headers: {
    // ok: hardcoded-github-token 
    Authorization: "token " + config['githubtoken'],
    }
})}