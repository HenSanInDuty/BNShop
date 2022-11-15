import { TDSMenuDTO } from 'tds-ui/menu';

export const DATA_MENU: Array<TDSMenuDTO> = [
    {
        "name": "Tổng quan",
        "icon": "tdsi-home-fill",
        "link": "/dashboard"
    },
    // {
    //     "name": "Lịch cho thuê tài sản",
    //     "icon": "tdsi-calendar-fill",
    //     "link": "/property-management",
    //     // "background": "bg-error-300",
    //     // "backgroundHover": "bg-error-400"
    // },
    // {
    //     "name": "Cá nhân",
    //     "icon": "tdsi-user-fill",
    //     // "background": "bg-info-300",
    //     // "backgroundHover": "bg-info-400",
    //     "listChild": [
    //         {
    //             "name": "Công cá nhân",
    //             "link": "/personal/timekeeping"
    //         }
    //     ]
    // },
    {
        "name": "Cấu hình",
        "icon": "tdsi-gear-1-fill",
        // "background": "bg-info-300",
        // "backgroundHover": "bg-info-400",
        // "roles": ["admin", "direction", "hr-admin"],
        "listChild": [
            // {
            //     "name": "Thông tin công ty",
            //     "link": "setting-resource/about-company"
            // },
            {
                "name": "Quản lý sản phẩm",
                // "roles": ["admin", "direction"],
                "link": "setting-resource/accset"
            },
            // {
            //     "name": "Phân quyền",
            //     // "roles": ["admin", "direction", "hr-admin"],
            //     "link": "setting-resource/role"
            // },
            // {
            //     "name": "Quản lý danh mục",
            //     "link": "setting-resource/time-attendance"
            // },
            {
                "name": "Quản lý danh mục",
                "link": "setting-resource/category"
            }
        ]
    },
    // {
    //     "name": "Quản lý nhân sự",
    //     "icon": "tdsi-group-people-fill",
    //     // "background": "bg-info-300",
    //     // "backgroundHover": "bg-info-400",
    //     // "roles": ["hr-admin"],
    //     "listChild": [
    //         {
    //             "name": "Nhân viên",
    //             "link": "hr-management/staff"
    //         },
    //         {
    //             "name": "Phòng ban",
    //             "link": "hr-management/department"
    //         },
    //         {
    //             "name": "Chức vụ",
    //             "link": "hr-management/position"
    //         },
    //         {
    //             "name": "Team",
    //             "link": "hr-management/team"
    //         }
    //     ]
    // },
    // {
    //     "name": "Quản lý team",
    //     "icon": "tdsi-group-people-fill",
    //     // "background": "bg-info-300",
    //     // "backgroundHover": "bg-info-400",
    //     // "roles": ["leader"],
    //     "listChild": [
    //         {
    //             "link": "/team/my-team",
    //             "name": "Team của tôi"
    //         }

    //     ]
    // },
    // {
    //     "name": "Quản lý chấm công",
    //     "icon": "tdsi-variant-fill",
    //     // "background": "bg-info-300",
    //     // "backgroundHover": "bg-info-400",
    //     // "roles": ["keeper-admin", "admin"],
    //     "listChild": [
    //         {
    //             "name": "Bảng công",
    //             "link": "/time-keepper/timesheets"
    //         },
    //         {
    //             "name": "Nghỉ phép",
    //             "link": "/time-keepper/leave-history"
    //         },
    //         {
    //             "name": "Xác nhận công",
    //             "link": "/time-keepper/confirm-work"
    //         }
    //     ]
    // },
    // {
    //     "name": "Kiểm duyệt",
    //     "icon": "tdsi-variant-fill",
    //     // "background": "bg-info-300",
    //     // "backgroundHover": "bg-info-400",
    //     // "roles": ["leader", "hr-admin"],
    //     "link": "/approval"
    // }
];
