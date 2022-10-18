import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

//these 5 exports work with the AdminController
export const insertAdmin = admin => api.post('/admin', admin)
export const getAdmins = () => api.post(`/admin`)
export const updateAdminById = (id, admins) => api.put(`/admin/${id}`, admins)
export const deleteAdminById = id => api.delete(`/admin/${id}`)
export const getAdminById = data => api.post(`/admin`, data)
export const getAllInfo = () => api.get(`/adminDB`)
//these 5 exports work with the ContactController
export const insertContact = contact => api.post('/contact', contact)
export const getContacts = () => api.get(`/contact`)
export const updateContactById = (id, contacts) => api.put(`/contact/${id}`, contacts)
export const deleteContactById = id => api.delete(`/contact/${id}`)
export const getContactById = data => api.post(`/contact`, data)
export const info = () => api.get('/userInfo')
export const user = () => api.get('/users')
//these 5 exports work with the ProviderController
export const insertProvider = provider => api.post('/provider', provider)
export const getProviders = () => api.get(`/provider`)
export const updateProviderById = payload => api.put(`/provider/:id`, payload)
export const deleteProviderById= id => api.delete(`/deleteProvider/${id}`)
export const getProviderById = data => api.post(`/provider`, data)

//this is the logic for the signup
export const handleSignup = async newUser => {
    console.log('Sending form to api',newUser);
    const res = await api.post('/signup', newUser);
    return res;
}

//this is the logic for the login
export const handleLogin = async user => {
    console.log('Logging in user', user);
    const res = await api.post('/login', user);
    return res;
}

//this is the logic for the userInfo
export const userInfo = async () => {
    console.log('Getting user info');
    const token = window.localStorage.getItem('api_token');
    const res = await api.get('/user', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return res;
}


const apis = {
    getAdmins,
    updateAdminById,
    deleteAdminById,
    getAdminById,
    insertContact,
    getContacts,
    updateContactById,
    deleteContactById,
    getContactById,
    insertProvider,
    getProviders,
    updateProviderById,
    deleteProviderById,
    getProviderById,
    getAllInfo,
    handleSignup,
    handleLogin,
    userInfo
}

export default apis