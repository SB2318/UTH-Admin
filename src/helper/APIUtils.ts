const EC2_BASE_URL = 'http://51.20.1.81:8084/api';
const LOGIN_API = `${EC2_BASE_URL}/admin/login`;
const REGISTRATION_API = `${EC2_BASE_URL}/admin/register`;
const GET_PROFILE_API = `${EC2_BASE_URL}/admin/getprofile`;
const UPLOAD_STORAGE = `${EC2_BASE_URL}/upload-storage`;
const CHECK_USER_HANDLE = `${EC2_BASE_URL}/user/check-user-handle`;
const VERIFICATION_MAIL_API = `${EC2_BASE_URL}/user/verifyEmail`;
export {
    LOGIN_API,
    REGISTRATION_API,
    GET_PROFILE_API,
    EC2_BASE_URL,
    UPLOAD_STORAGE,
    CHECK_USER_HANDLE,
    VERIFICATION_MAIL_API
}