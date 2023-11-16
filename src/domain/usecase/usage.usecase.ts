import { StorageUnitEnum, Usage } from "../models/Usage.mode"

const getUsage = async (): Promise<Usage> => {
	const usage: Usage = {
		planId: "124123123123",
		userId: "2452345245",
		filesCount: 4,
		storageSum: 98,
		storageUnit: StorageUnitEnum.MB,
	}
	return usage
}

export { getUsage }
