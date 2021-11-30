export function saveTokenToLocalStorage(token, login) {
    localStorage.setItem('Token', token);
    localStorage.setItem('Name', login);
}

export function isAuthorizated() {
    return !!localStorage.getItem('Token');
}

export function logout() {
    fetch('https://api.digital-investor.kz/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('Token'),
        },
    });
    localStorage.removeItem('Token');
    localStorage.removeItem('Name');
}

export function getToken() {
    return localStorage.getItem('Token');
}

export function getUserName() {
    return localStorage.getItem('Name');
}
