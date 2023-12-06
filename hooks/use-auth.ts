import { authApi } from '@/api'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'

export function useAuth(options?: Partial<PublicConfiguration>) {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR('/profile', {
		dedupingInterval: 60 * 60 * 1000, // 1hr
		revalidateOnFocus: false,
		...options,
	})

	const firstLoading = profile === undefined && error === undefined

	const onLogin = async ()=> {
		await authApi.login({
			username: 'test1',
			password: '123123',
		})

		await mutate()
	}

	const onLogout = async ()=> {
		await authApi.logout()
		mutate(null, false)
	}

	return {
		profile,
		error,
		firstLoading,
		onLogin,
		onLogout,
	}
}
