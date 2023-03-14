type GalleryItem = {
    id: string;
    urls: {
        small: string;
        raw: string;
        small_s3: string;
        thumb: string;
    };
    user: {
        first_name: string;
        last_name: string;
    };
};
export interface GallerySliceState {
    items: GalleryItem[];
}
