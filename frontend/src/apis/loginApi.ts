import api from 'apis/commonApi';
import { isAxiosError } from 'axios';
import { TokenResponse } from 'types/api/member';
import { getCookie, removeCookie, setCookie } from 'utils/stateUtils';
const AUTH_URL = '/api/v1/auth';

/**
 * IMP : 아래 함수는 API가 아님. Redirect를 통해 외부 URL로 이동하는 함수
 * TODO : Local Front 개발 환경이 갖춰지기 전 까지는 local remote 주석을 변경해야 한다.
 * @param provider
 */
// Type : remote
const LOGIN_URL = `/oauth2/authorization`;
export const loginRoute = (provider: string): void => {
  const loginUrl = `${LOGIN_URL}/${provider}`;
  console.log(loginUrl);
  window.location.href = loginUrl;
};

/**
 * IMP : Provider Id를 기반으로 AccessToken을 가져오는 API
 * IMP : Authorization Header가 필요하지 않은 API ( 비로그인 기능 )
 */
export const getLogin = async (providerId: string): Promise<TokenResponse> => {
  try {
    const response = await api.get(
      `${AUTH_URL}/login?providerId=${encodeURIComponent(providerId)}`,
    );
    return response.data.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) throw new Error('Not Found');
      else throw error;
    } else throw error;
  }
};

export const getLogout = async (providerId: string): Promise<void> => {
  try {
    const response = await api.get(
      `${AUTH_URL}/login?providerId=${encodeURIComponent(providerId)}`,
    );
    if (response.data.data) {
      removeCookie('AccessToken');
      removeCookie('RefreshToken');
      removeCookie('ProviderId');
      window.location.href = '/login';
    }
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) throw new Error('Not Found');
      else throw error;
    } else throw error;
  }
};

/**
 * IMP : reissue를 한다는 것은, Login이 되어 있는 상태라는 뜻!
 * IMP => 이것이 실패하면 LogOut을 해줘야 한다.
 * @param providerId
 * @returns
 */

export const reissueToken = async (providerId: string): Promise<string> => {
  try {
    const refreshToken = getCookie('RefreshToken');
    const response = await api.get(`${AUTH_URL}/reissue`, {
      headers: {
        'refresh-token': refreshToken,
      },
      params: {
        providerId,
      },
    });
    const accessToken = response.data.data.accessToken;
    return accessToken;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) throw new Error('Not Found');
      else throw error;
    } else throw error;
  }
};
