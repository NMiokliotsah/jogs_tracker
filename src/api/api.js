const accessToken = localStorage.getItem("token");

export const api = {
    getToken() {
        return fetch("https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin?uuid=hello", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => (res.json()));
    },

    getJogs() {
        return fetch("https://jogtracker.herokuapp.com/api/v1/data/sync", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            }
        })
            .then(res => (res.json()));
    },

    setJog(jog) {
        return fetch("https://jogtracker.herokuapp.com/api/v1/data/jog", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(jog)
        })
            .then(res => (res.json()));
    },

    changeJog(jog) {
        return fetch("https://jogtracker.herokuapp.com/api/v1/data/jog", {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(jog)
        })
            .then(res => (res.json()));
    }
}
