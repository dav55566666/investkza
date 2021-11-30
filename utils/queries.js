export async function buyTokens(token) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/buy-tokens`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify(token),
        });
        const res = response.json();

        return res;
    } catch (e) {
        return e;
    }
}

export async function getTokenInfo(tokenId) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-token-info`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify({ token_id: tokenId }),
        });
        const res = response.json();

        return res;
    } catch (e) {
        return e;
    }
}

export async function getTokens() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-tokens`);
        const res = response.json();

        return res;
    } catch (e) {
        return e;
    }
}
