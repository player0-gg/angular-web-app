export interface VisualSpots {
    x: number[];
    y: number[];
    z: number[];
}

export interface VisualTrackAttributes {
    name: string;
    TRACK_STOP: number;
    TRACK_INDEX: number;
    TRACK_Y_LOCATION: number;
    TRACK_MAX_QUALITY: number;
    NUMBER_SPLITS: number;
    TRACK_STD_QUALITY: number;
    TRACK_MIN_SPEED: number;
    TRACK_ID: number;
    NUMBER_MERGES: number;
    TRACK_Z_LOCATION: number;
    LONGEST_GAP: number;
    TRACK_MAX_SPEED: number;
    NUMBER_GAPS: number;
    TRACK_MEAN_SPEED: number;
    TRACK_MIN_QUALITY: number;
    TRACK_STD_SPEED: number;
    NUMBER_SPOTS: number;
    NUMBER_COMPLEX: number;
    TRACK_START: number;
    TRACK_DISPLACEMENT: number;
    TRACK_MEDIAN_SPEED: number;
    TRACK_MEDIAN_QUALITY: number;
    TRACK_X_LOCATION: number;
    TRACK_DURATION: number;
    TRACK_MEAN_QUALITY: number;
}

export interface VisualTrackData {
    attrib: VisualTrackAttributes;
    spots: VisualSpots;
}

export interface VisualTrack {
    name: string;
    data: VisualTrackData;
}

export interface VisualData {
    tracks: Array<VisualTrack>;
}
