# Creating A React App

# Fake Back-End - using json-server
- npm install json-server
## In package.json
```   "server": "json-server --watch db.json --port 5000"
```
## We can change our db.json
```
{
  "tasks": [
    {
      "id": 1,
      "text": "I love food",
      "day": "Jul 6th at 12:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "I love to eat",
      "day": "Jul 4th at 11:45am",
      "reminder": false
    },
    {
      "id": 3,
      "text": "I live to fight and die another day",
      "day": "Jul 1st at 2:30pm",
      "reminder": false
    }
  ]
}
```
# useEffect runs as soon as the app component loads in
```
  useEffect(() => {
    // cannot make useEffect asynchronous
    const fetchTasks = async() => {
      const res = await fetch('http://localhost:5500/tasks');
      const data = await res.json();
      console.log(data)
    }
    fetchTasks();
  }, []);
```