import {CompatibilityStatus} from "@/constants/compatibility";

export const compatibility: { [name: string]: Compatibility } = {
    "Replier": {
        feature: "`Replier`",
        url: "/legacy/Replier",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.2a",
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
                }
            ],
            starLight: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.0"
                }
            ]
        }
    },
    "markAsRead": {
        feature: "`markAsRead`",
        url: "/legacy/Replier/markAsRead",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.2a",
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
                }
            ],
            starLight: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "reply(String)": {
        feature: "`reply(String)`",
        url: "/legacy/Replier/reply(String)",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.2a",
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
                }
            ],
            starLight: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.0"
                }
            ]
        }
    },
    "reply(String,String,Boolean$)": {
        feature: "`reply(String, String, Boolean?)`",
        url: "/legacy/Replier/reply(String,String,Boolean$)",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.2a"
                },
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    detailedStatus: {
                        bug: true
                    },
                    version: {
                        start: "0.7.34a",
                        last: "0.7.38a"
                    },
                    description: ["`reply(String, String)`이 존재하지 않음.", "`reply(String, String, Boolean)`이 `false`를 반환함."]
                },
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.7.38a",
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.PARTIAL_SUPPORT,
                    version: "1.0",
                    description: "`reply(String, String, Boolean)`이 존재하지 않음"
                }
            ],
            starLight: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.0"
                }
            ]
        }
    },
    "replyDelayed(String,Number)": {
        feature: "`replyDelayed(String, Number)`",
        url: "/legacy/Replier/replyDelayed(String,Number)",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "0.1.2a",
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
                }
            ],
            starLight: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
    "replyDelayed(String,String,Number,Boolean$)": {
        feature: "`replyDelayed(String, String, Number, Boolean?)`",
        url: "/legacy/Replier/replyDelayed(String,String,Number,Boolean$)",
        status: {
            deprecated: false,
            experimental: false,
            nonStandard: false
        },
        support: {
            msgBot: [
                {
                    status: CompatibilityStatus.PARTIAL_SUPPORT,
                    version: "0.1.2a",
                    description: "`replyDelayed(String, String, Number)`이 존재하지 않음."
                }
            ],
            autoReplyBot: [
                {
                    status: CompatibilityStatus.FULL_SUPPORT,
                    version: "1.0"
                }
            ],
            starLight: [
                {
                    status: CompatibilityStatus.NO_SUPPORT,
                    version: ""
                }
            ]
        }
    },
};