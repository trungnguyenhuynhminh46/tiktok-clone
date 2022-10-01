import * as request from '~/utils/httpRequest';
const search = async (q, type = 'less') => {
    try {
        const response = await request.get('users/search', {
            params: {
                q: q,
                type: type,
            },
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export default search;
