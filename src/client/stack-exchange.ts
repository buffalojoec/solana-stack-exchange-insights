import axios from "axios";

const stackExchangeEndpoint = 'https://api.stackexchange.com/2.3';

const stackExchangeOptions = {
    headers: {
      'User-Agent': 'request'
    }
};

// Questions

export type QuestionRequestParams = {
    order: 'desc' | 'asc',
    sort: 'activity' | 'creation' | 'votes',
    page?: number,
    pageSize?: number,
    toDate?: number,
    fromDate?: number,
    minDate?: number,
    maxDate?: number,
    tagged?: string | string[],
}

const evaluateQuestionRequestParams = (params: QuestionRequestParams): string => {
    let base = '?';
    if (params.order) base += `order=${params.order}&`;
    if (params.sort) base += `sort=${params.sort}&`;
    if (params.page) base += `page=${params.page}&`;
    if (params.pageSize) base += `pagesize=${params.pageSize}&`;
    if (params.toDate) base += `todate=${params.toDate}&`;
    if (params.fromDate) base += `fromdate=${params.fromDate}&`;
    if (params.minDate) base += `min=${params.minDate}&`;
    if (params.maxDate) base += `max=${params.maxDate}&`;
    if (params.tagged) base += `tagged=${Array.isArray(params.tagged) ? params.tagged.join(';') : params.tagged}&`;
    base += 'site=solana';
    return base;
}

export async function questionRequest(endpoint?: string, params?: QuestionRequestParams): Promise<any | null> {
    let paramsQuery = params ? evaluateQuestionRequestParams(params) : evaluateQuestionRequestParams({
        order: 'desc',
        sort: 'activity',
    });
    try {
        return await axios
            .get(
                stackExchangeEndpoint + '/questions' + (endpoint ?? '') + paramsQuery,
                {
                    ...stackExchangeOptions,
                },
            )
            .then(res => res.data);
    } catch (err) {
        return null;
    }
}

// Posts

export type PostRequestParams = {
    order: 'desc' | 'asc',
    sort: 'activity' | 'creation' | 'votes',
    page?: number,
    pageSize?: number,
    toDate?: number,
    fromDate?: number,
    minDate?: number,
    maxDate?: number,
}

const evaluatePostRequestParams = (params: PostRequestParams): string => {
    let base = '?';
    if (params.order) base += `order=${params.order}&`;
    if (params.sort) base += `sort=${params.sort}&`;
    if (params.page) base += `page=${params.page}&`;
    if (params.pageSize) base += `pagesize=${params.pageSize}&`;
    if (params.toDate) base += `todate=${params.toDate}&`;
    if (params.fromDate) base += `fromdate=${params.fromDate}&`;
    if (params.minDate) base += `min=${params.minDate}&`;
    if (params.maxDate) base += `max=${params.maxDate}&`;
    base += 'site=solana';
    return base;
}

export async function postRequest(endpoint?: string, params?: PostRequestParams): Promise<any | null> {
    let paramsQuery = params ? evaluatePostRequestParams(params) : evaluatePostRequestParams({
        order: 'desc',
        sort: 'activity',
    });
    try {
        return await axios
            .get(
                stackExchangeEndpoint + '/posts' + (endpoint ?? '') + paramsQuery,
                {
                    ...stackExchangeOptions,
                },
            )
            .then(res => res.data);
    } catch (err) {
        return null;
    }
}