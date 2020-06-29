import { act } from 'react-test-renderer';

export function wait(amount = 0) {
    return new Promise((resolve) => setTimeout(resolve, amount));
}

// Use this in your test after mounting if you need just need to let the query finish without updating the wrapper
export async function actWait(amount = 0) {
    await act(async () => {
        await wait(amount);
    });
}
