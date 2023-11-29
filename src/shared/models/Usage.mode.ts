export interface Usage {
	planId: string
	userId: string
	filesCount: number
	storageSum: number
	storageUnit: StorageUnitEnum
}

export enum StorageUnitEnum {
	MB = "MB",
	GB = "GB",
}
