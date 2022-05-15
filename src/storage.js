const storage ={
    push: function (key, value) {
        const keys = JSON.parse(localStorage.getItem(key)) || [];

        keys.push({
            id: value.id,
            editCode: value.editCode
        });

        localStorage.setItem(key, JSON.stringify(keys));
    }
}

export default storage;