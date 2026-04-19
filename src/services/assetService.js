import api from './api';

export const getAssets = (portfolioId) => {
    return api.get(`/assets?portfolioId=${portfolioId}`);
};

export const createAsset = (asset) => {
    return api.post('/assets', asset);
};

export const deleteAsset = (id) => {
    return api.delete(`/assets/${id}`);
};