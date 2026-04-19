import api from './api';

export const getPortfolios = (userId) => {
    return api.get(`/portfolios?userId=${userId}`);
};

export const createPortfolio = (portfolio) => {
    return api.post('/portfolios', portfolio);
};

export const deletePortfolio = (id) => {
    return api.delete(`/portfolios/${id}`);
};