import platforms from '../data/platforms';

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => ({data: platforms, isLoading: null, error: null});

export default usePlatforms