export const getApiError = (apiError) => {
    const { data } = apiError
    return data.message
}

export const createError = ({message, data}) => {
    return Promise.reject({message, data})
}