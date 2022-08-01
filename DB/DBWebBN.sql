/*==============================================================*/
/* DBMS name:      SAP SQL Anywhere 17                          */
/* Created on:     7/27/2022 8:46:06 PM                         */
/*==============================================================*/


if exists(select 1 from sys.sysforeignkey where role='FK_CHI_TIET_CHI_TIET__DON_HANG') then
    alter table CHI_TIET_DON_HANG
       delete foreign key FK_CHI_TIET_CHI_TIET__DON_HANG
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_CHI_TIET_CHI_TIET__SAN_PHAM') then
    alter table CHI_TIET_DON_HANG
       delete foreign key FK_CHI_TIET_CHI_TIET__SAN_PHAM
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_CHI_TIET_CHI_TIET__SAN_PHAM') then
    alter table CHI_TIET_SAN_PHAM
       delete foreign key FK_CHI_TIET_CHI_TIET__SAN_PHAM
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_DANH_GIA_DANHGIASA_KHACH_HA') then
    alter table DANH_GIA
       delete foreign key FK_DANH_GIA_DANHGIASA_KHACH_HA
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_DANH_GIA_DANH_GIA__SAN_PHAM') then
    alter table DANH_GIA
       delete foreign key FK_DANH_GIA_DANH_GIA__SAN_PHAM
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_DIA_CHI_DIA_CHI_D_DAI_LY') then
    alter table DIA_CHI
       delete foreign key FK_DIA_CHI_DIA_CHI_D_DAI_LY
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_DIA_CHI_DIA_CHI_K_KHACH_HA') then
    alter table DIA_CHI
       delete foreign key FK_DIA_CHI_DIA_CHI_K_KHACH_HA
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_DON_HANG_DON_HANG__KHACH_HA') then
    alter table DON_HANG
       delete foreign key FK_DON_HANG_DON_HANG__KHACH_HA
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_GIA_SAN_PHAM__SAN_PHAM') then
    alter table GIA
       delete foreign key FK_GIA_SAN_PHAM__SAN_PHAM
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_HINH_ANH_HINH_ANH__SAN_PHAM') then
    alter table HINH_ANH
       delete foreign key FK_HINH_ANH_HINH_ANH__SAN_PHAM
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_LOAI_CUA_LOAI_CUA__LOAI') then
    alter table LOAI_CUA_SAN_PHAM
       delete foreign key FK_LOAI_CUA_LOAI_CUA__LOAI
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_LOAI_CUA_LOAI_CUA__SAN_PHAM') then
    alter table LOAI_CUA_SAN_PHAM
       delete foreign key FK_LOAI_CUA_LOAI_CUA__SAN_PHAM
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_MA_KHUYE_DAI_LY_QU_DAI_LY') then
    alter table MA_KHUYEN_MAI
       delete foreign key FK_MA_KHUYE_DAI_LY_QU_DAI_LY
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_MA_KHUYE_MA_KHUYEN_KHACH_HA') then
    alter table MA_KHUYEN_MAI
       delete foreign key FK_MA_KHUYE_MA_KHUYEN_KHACH_HA
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_MA_KHUYE_RELATIONS_DON_HANG') then
    alter table MA_KHUYEN_MAI
       delete foreign key FK_MA_KHUYE_RELATIONS_DON_HANG
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_MA_KHUYE_RELATIONS_LOAI_KHU') then
    alter table MA_KHUYEN_MAI
       delete foreign key FK_MA_KHUYE_RELATIONS_LOAI_KHU
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_PHAN_HOI_PHAN_HOI__DANH_GIA') then
    alter table PHAN_HOI
       delete foreign key FK_PHAN_HOI_PHAN_HOI__DANH_GIA
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_PHAN_HOI_RELATIONS_KHACH_HA') then
    alter table PHAN_HOI
       delete foreign key FK_PHAN_HOI_RELATIONS_KHACH_HA
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_PHAN_HOI_RELATIONS_DAI_LY') then
    alter table PHAN_HOI
       delete foreign key FK_PHAN_HOI_RELATIONS_DAI_LY
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_SAN_PHAM_RELATIONS_DAI_LY') then
    alter table SAN_PHAM
       delete foreign key FK_SAN_PHAM_RELATIONS_DAI_LY
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_SAN_PHAM_SAN_PHAM__DON_HANG') then
    alter table SAN_PHAM
       delete foreign key FK_SAN_PHAM_SAN_PHAM__DON_HANG
end if;

drop index if exists CHI_TIET_DON_HANG.CHI_TIET_DON_HANG2_FK;

drop index if exists CHI_TIET_DON_HANG.CHI_TIET_DON_HANG_FK;

drop index if exists CHI_TIET_DON_HANG.CHI_TIET_DON_HANG_PK;

drop table if exists CHI_TIET_DON_HANG;

drop index if exists CHI_TIET_SAN_PHAM.CHI_TIET_CUA_SAN_PHAM_FK;

drop index if exists CHI_TIET_SAN_PHAM.CHI_TIET_SAN_PHAM_PK;

drop table if exists CHI_TIET_SAN_PHAM;

drop index if exists DAI_LY.DAI_LY_PK;

drop table if exists DAI_LY;

drop index if exists DANH_GIA.DANHGIASANPHAM_FK;

drop index if exists DANH_GIA.DANH_GIA_CUA_SAN_PHAM_FK;

drop index if exists DANH_GIA.DANH_GIA_PK;

drop table if exists DANH_GIA;

drop index if exists DIA_CHI.DIA_CHI_KHACH_HANG_FK;

drop index if exists DIA_CHI.DIA_CHI_DAI_LY_FK;

drop index if exists DIA_CHI.DIA_CHI_PK;

drop table if exists DIA_CHI;

drop index if exists DON_HANG.DON_HANG_CUA_KHACH_HANG_FK;

drop index if exists DON_HANG.DON_HANG_PK;

drop table if exists DON_HANG;

drop index if exists GIA.SAN_PHAM_CO_GIA_FK;

drop index if exists GIA.GIA_PK;

drop table if exists GIA;

drop index if exists HINH_ANH.HINH_ANH_CUA_SAN_PHAM_FK;

drop index if exists HINH_ANH.HINH_ANH_PK;

drop table if exists HINH_ANH;

drop index if exists KHACH_HANG.KHACH_HANG_PK;

drop table if exists KHACH_HANG;

drop index if exists LOAI.LOAI_PK;

drop table if exists LOAI;

drop index if exists LOAI_CUA_SAN_PHAM.LOAI_CUA_SAN_PHAM2_FK;

drop index if exists LOAI_CUA_SAN_PHAM.LOAI_CUA_SAN_PHAM_FK;

drop index if exists LOAI_CUA_SAN_PHAM.LOAI_CUA_SAN_PHAM_PK;

drop table if exists LOAI_CUA_SAN_PHAM;

drop index if exists LOAI_KHUYEN_MAI.LOAI_KHUYEN_MAI_PK;

drop table if exists LOAI_KHUYEN_MAI;

drop index if exists MA_KHUYEN_MAI.RELATIONSHIP_21_FK;

drop index if exists MA_KHUYEN_MAI.RELATIONSHIP_20_FK;

drop index if exists MA_KHUYEN_MAI.MA_KHUYEN_MAI_TANG_KHACH_HANG_FK;

drop index if exists MA_KHUYEN_MAI.DAI_LY_QUAN_LY_MA_KHUYEN_MAI_FK;

drop index if exists MA_KHUYEN_MAI.MA_KHUYEN_MAI_PK;

drop table if exists MA_KHUYEN_MAI;

drop index if exists PHAN_HOI.RELATIONSHIP_7_FK;

drop index if exists PHAN_HOI.RELATIONSHIP_6_FK;

drop index if exists PHAN_HOI.PHAN_HOI_DANH_GIA_FK;

drop index if exists PHAN_HOI.PHAN_HOI_PK;

drop table if exists PHAN_HOI;

drop index if exists SAN_PHAM.SAN_PHAM_TRONG_DON_HANG_FK;

drop index if exists SAN_PHAM.RELATIONSHIP_15_FK;

drop index if exists SAN_PHAM.SAN_PHAM_PK;

drop table if exists SAN_PHAM;

/*==============================================================*/
/* Table: CHI_TIET_DON_HANG                                     */
/*==============================================================*/
create or replace table CHI_TIET_DON_HANG 
(
   DON_KH_ID            integer                        not null,
   DH_ID                integer                        not null,
   KH_ID                integer                        not null,
   DL_ID                integer                        not null,
   SAN_DH_ID            integer                        not null,
   SP_ID                integer                        not null,
   constraint PK_CHI_TIET_DON_HANG primary key clustered (DON_KH_ID, KH_ID, DL_ID, SAN_DH_ID, DH_ID, SP_ID)
);

/*==============================================================*/
/* Index: CHI_TIET_DON_HANG_PK                                  */
/*==============================================================*/
create unique clustered index CHI_TIET_DON_HANG_PK on CHI_TIET_DON_HANG (
DON_KH_ID ASC,
KH_ID ASC,
DL_ID ASC,
SAN_DH_ID ASC,
DH_ID ASC,
SP_ID ASC
);

/*==============================================================*/
/* Index: CHI_TIET_DON_HANG_FK                                  */
/*==============================================================*/
create index CHI_TIET_DON_HANG_FK on CHI_TIET_DON_HANG (
DON_KH_ID ASC,
DH_ID ASC
);

/*==============================================================*/
/* Index: CHI_TIET_DON_HANG2_FK                                 */
/*==============================================================*/
create index CHI_TIET_DON_HANG2_FK on CHI_TIET_DON_HANG (
KH_ID ASC,
DL_ID ASC,
SAN_DH_ID ASC,
SP_ID ASC
);

/*==============================================================*/
/* Table: CHI_TIET_SAN_PHAM                                     */
/*==============================================================*/
create or replace table CHI_TIET_SAN_PHAM 
(
   KH_ID                integer                        not null,
   DL_ID                integer                        not null,
   DH_ID                integer                        not null,
   SP_ID                integer                        not null,
   CTSP_ID              integer                        not null,
   CTSP_TIEUDE          long varchar                   null,
   CTSP_NOIDUNG         long varchar                   null,
   constraint PK_CHI_TIET_SAN_PHAM primary key clustered (KH_ID, DL_ID, DH_ID, SP_ID, CTSP_ID)
);

/*==============================================================*/
/* Index: CHI_TIET_SAN_PHAM_PK                                  */
/*==============================================================*/
create unique clustered index CHI_TIET_SAN_PHAM_PK on CHI_TIET_SAN_PHAM (
KH_ID ASC,
DL_ID ASC,
DH_ID ASC,
SP_ID ASC,
CTSP_ID ASC
);

/*==============================================================*/
/* Index: CHI_TIET_CUA_SAN_PHAM_FK                              */
/*==============================================================*/
create index CHI_TIET_CUA_SAN_PHAM_FK on CHI_TIET_SAN_PHAM (
KH_ID ASC,
DL_ID ASC,
DH_ID ASC,
SP_ID ASC
);

/*==============================================================*/
/* Table: DAI_LY                                                */
/*==============================================================*/
create or replace table DAI_LY 
(
   DL_ID                integer                        not null,
   DL_TEN               long varchar                   null,
   DL_AVATAR            long varchar                   null,
   DL_EMAIL             long varchar                   null,
   DL_SDT               long varchar                   null,
   DL_CMND              long varchar                   null,
   constraint PK_DAI_LY primary key clustered (DL_ID)
);

/*==============================================================*/
/* Index: DAI_LY_PK                                             */
/*==============================================================*/
create unique clustered index DAI_LY_PK on DAI_LY (
DL_ID ASC
);

/*==============================================================*/
/* Table: DANH_GIA                                              */
/*==============================================================*/
create or replace table DANH_GIA 
(
   SAN_KH_ID            integer                        not null,
   DL_ID                integer                        not null,
   DH_ID                integer                        not null,
   SP_ID                integer                        not null,
   KH_ID                integer                        not null,
   DG_ID                integer                        not null,
   DG_NOIDUNG           long varchar                   null,
   DG_SOSAO             tinyint                        null,
   DG_LIKE              integer                        null,
   constraint PK_DANH_GIA primary key clustered (SAN_KH_ID, DL_ID, DH_ID, SP_ID, KH_ID, DG_ID)
);

/*==============================================================*/
/* Index: DANH_GIA_PK                                           */
/*==============================================================*/
create unique clustered index DANH_GIA_PK on DANH_GIA (
SAN_KH_ID ASC,
DL_ID ASC,
DH_ID ASC,
SP_ID ASC,
KH_ID ASC,
DG_ID ASC
);

/*==============================================================*/
/* Index: DANH_GIA_CUA_SAN_PHAM_FK                              */
/*==============================================================*/
create index DANH_GIA_CUA_SAN_PHAM_FK on DANH_GIA (
SAN_KH_ID ASC,
DL_ID ASC,
DH_ID ASC,
SP_ID ASC
);

/*==============================================================*/
/* Index: DANHGIASANPHAM_FK                                     */
/*==============================================================*/
create index DANHGIASANPHAM_FK on DANH_GIA (
KH_ID ASC
);

/*==============================================================*/
/* Table: DIA_CHI                                               */
/*==============================================================*/
create or replace table DIA_CHI 
(
   DL_ID                integer                        not null,
   KH_ID                integer                        not null,
   DC_ID                integer                        not null,
   DC_TINH              long varchar                   null,
   DC_QUAN              long varchar                   null,
   DC_PHUONG            long varchar                   null,
   DC_CHITIET           long varchar                   null,
   constraint PK_DIA_CHI primary key clustered (DL_ID, KH_ID, DC_ID)
);

/*==============================================================*/
/* Index: DIA_CHI_PK                                            */
/*==============================================================*/
create unique clustered index DIA_CHI_PK on DIA_CHI (
DL_ID ASC,
KH_ID ASC,
DC_ID ASC
);

/*==============================================================*/
/* Index: DIA_CHI_DAI_LY_FK                                     */
/*==============================================================*/
create index DIA_CHI_DAI_LY_FK on DIA_CHI (
DL_ID ASC
);

/*==============================================================*/
/* Index: DIA_CHI_KHACH_HANG_FK                                 */
/*==============================================================*/
create index DIA_CHI_KHACH_HANG_FK on DIA_CHI (
KH_ID ASC
);

/*==============================================================*/
/* Table: DON_HANG                                              */
/*==============================================================*/
create or replace table DON_HANG 
(
   KH_ID                integer                        not null,
   DH_ID                integer                        not null,
   DH_SOLUONG           integer                        null,
   DH_TONGGIA           float                          null,
   constraint PK_DON_HANG primary key clustered (KH_ID, DH_ID)
);

/*==============================================================*/
/* Index: DON_HANG_PK                                           */
/*==============================================================*/
create unique clustered index DON_HANG_PK on DON_HANG (
KH_ID ASC,
DH_ID ASC
);

/*==============================================================*/
/* Index: DON_HANG_CUA_KHACH_HANG_FK                            */
/*==============================================================*/
create index DON_HANG_CUA_KHACH_HANG_FK on DON_HANG (
KH_ID ASC
);

/*==============================================================*/
/* Table: GIA                                                   */
/*==============================================================*/
create or replace table GIA 
(
   KH_ID                integer                        not null,
   DL_ID                integer                        not null,
   DH_ID                integer                        not null,
   SP_ID                integer                        not null,
   G_ID                 integer                        not null,
   G_TUNGAY             date                           null,
   constraint PK_GIA primary key clustered (KH_ID, DL_ID, DH_ID, SP_ID, G_ID)
);

/*==============================================================*/
/* Index: GIA_PK                                                */
/*==============================================================*/
create unique clustered index GIA_PK on GIA (
KH_ID ASC,
DL_ID ASC,
DH_ID ASC,
SP_ID ASC,
G_ID ASC
);

/*==============================================================*/
/* Index: SAN_PHAM_CO_GIA_FK                                    */
/*==============================================================*/
create index SAN_PHAM_CO_GIA_FK on GIA (
KH_ID ASC,
DL_ID ASC,
DH_ID ASC,
SP_ID ASC
);

/*==============================================================*/
/* Table: HINH_ANH                                              */
/*==============================================================*/
create or replace table HINH_ANH 
(
   KH_ID                integer                        not null,
   DL_ID                integer                        not null,
   DH_ID                integer                        not null,
   SP_ID                integer                        not null,
   HINH_ID              integer                        not null,
   HINH_URL             long varchar                   null,
   constraint PK_HINH_ANH primary key clustered (KH_ID, DL_ID, DH_ID, SP_ID, HINH_ID)
);

/*==============================================================*/
/* Index: HINH_ANH_PK                                           */
/*==============================================================*/
create unique clustered index HINH_ANH_PK on HINH_ANH (
KH_ID ASC,
DL_ID ASC,
DH_ID ASC,
SP_ID ASC,
HINH_ID ASC
);

/*==============================================================*/
/* Index: HINH_ANH_CUA_SAN_PHAM_FK                              */
/*==============================================================*/
create index HINH_ANH_CUA_SAN_PHAM_FK on HINH_ANH (
KH_ID ASC,
DL_ID ASC,
DH_ID ASC,
SP_ID ASC
);

/*==============================================================*/
/* Table: KHACH_HANG                                            */
/*==============================================================*/
create or replace table KHACH_HANG 
(
   KH_ID                integer                        not null,
   KH_HO                long varchar                   null,
   KH_TEN               long varchar                   null,
   KH_AVATAR            long varchar                   null,
   KH_EMAIL             long varchar                   null,
   KH_SDT               long varchar                   null,
   KH_NGAYSINH          date                           null,
   KH_GIOITINH          tinyint                        null,
   constraint PK_KHACH_HANG primary key clustered (KH_ID)
);

/*==============================================================*/
/* Index: KHACH_HANG_PK                                         */
/*==============================================================*/
create unique clustered index KHACH_HANG_PK on KHACH_HANG (
KH_ID ASC
);

/*==============================================================*/
/* Table: LOAI                                                  */
/*==============================================================*/
create or replace table LOAI 
(
   LOAI_ID              integer                        not null,
   LOAI_TEN             long varchar                   null,
   constraint PK_LOAI primary key clustered (LOAI_ID)
);

/*==============================================================*/
/* Index: LOAI_PK                                               */
/*==============================================================*/
create unique clustered index LOAI_PK on LOAI (
LOAI_ID ASC
);

/*==============================================================*/
/* Table: LOAI_CUA_SAN_PHAM                                     */
/*==============================================================*/
create or replace table LOAI_CUA_SAN_PHAM 
(
   LOAI_ID              integer                        not null,
   KH_ID                integer                        not null,
   DL_ID                integer                        not null,
   DH_ID                integer                        not null,
   SP_ID                integer                        not null,
   constraint PK_LOAI_CUA_SAN_PHAM primary key clustered (LOAI_ID, KH_ID, DL_ID, DH_ID, SP_ID)
);

/*==============================================================*/
/* Index: LOAI_CUA_SAN_PHAM_PK                                  */
/*==============================================================*/
create unique clustered index LOAI_CUA_SAN_PHAM_PK on LOAI_CUA_SAN_PHAM (
LOAI_ID ASC,
KH_ID ASC,
DL_ID ASC,
DH_ID ASC,
SP_ID ASC
);

/*==============================================================*/
/* Index: LOAI_CUA_SAN_PHAM_FK                                  */
/*==============================================================*/
create index LOAI_CUA_SAN_PHAM_FK on LOAI_CUA_SAN_PHAM (
LOAI_ID ASC
);

/*==============================================================*/
/* Index: LOAI_CUA_SAN_PHAM2_FK                                 */
/*==============================================================*/
create index LOAI_CUA_SAN_PHAM2_FK on LOAI_CUA_SAN_PHAM (
KH_ID ASC,
DL_ID ASC,
DH_ID ASC,
SP_ID ASC
);

/*==============================================================*/
/* Table: LOAI_KHUYEN_MAI                                       */
/*==============================================================*/
create or replace table LOAI_KHUYEN_MAI 
(
   LKM_ID               integer                        not null,
   LKM_TENLOAI          integer                        null,
   constraint PK_LOAI_KHUYEN_MAI primary key clustered (LKM_ID)
);

/*==============================================================*/
/* Index: LOAI_KHUYEN_MAI_PK                                    */
/*==============================================================*/
create unique clustered index LOAI_KHUYEN_MAI_PK on LOAI_KHUYEN_MAI (
LKM_ID ASC
);

/*==============================================================*/
/* Table: MA_KHUYEN_MAI                                         */
/*==============================================================*/
create or replace table MA_KHUYEN_MAI 
(
   DL_ID                integer                        not null,
   KH_ID                integer                        not null,
   DON_KH_ID            integer                        not null,
   DH_ID                integer                        not null,
   LKM_ID               integer                        not null,
   MKM_ID               integer                        not null,
   MKM_TEN              long varchar                   null,
   MKM_MUCKHUYENMAI     float                          null,
   MKM_NOIDUNG          long varchar                   null,
   MKM_TIEUDE           long varchar                   null,
   constraint PK_MA_KHUYEN_MAI primary key clustered (DON_KH_ID, DL_ID, KH_ID, DH_ID, LKM_ID, MKM_ID)
);

/*==============================================================*/
/* Index: MA_KHUYEN_MAI_PK                                      */
/*==============================================================*/
create unique clustered index MA_KHUYEN_MAI_PK on MA_KHUYEN_MAI (
DON_KH_ID ASC,
DL_ID ASC,
KH_ID ASC,
DH_ID ASC,
LKM_ID ASC,
MKM_ID ASC
);

/*==============================================================*/
/* Index: DAI_LY_QUAN_LY_MA_KHUYEN_MAI_FK                       */
/*==============================================================*/
create index DAI_LY_QUAN_LY_MA_KHUYEN_MAI_FK on MA_KHUYEN_MAI (
DL_ID ASC
);

/*==============================================================*/
/* Index: MA_KHUYEN_MAI_TANG_KHACH_HANG_FK                      */
/*==============================================================*/
create index MA_KHUYEN_MAI_TANG_KHACH_HANG_FK on MA_KHUYEN_MAI (
KH_ID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_20_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_20_FK on MA_KHUYEN_MAI (
DON_KH_ID ASC,
DH_ID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_21_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_21_FK on MA_KHUYEN_MAI (
LKM_ID ASC
);

/*==============================================================*/
/* Table: PHAN_HOI                                              */
/*==============================================================*/
create or replace table PHAN_HOI 
(
   SAN_KH_ID            integer                        not null,
   DAN_DL_ID            integer                        not null,
   DH_ID                integer                        not null,
   SP_ID                integer                        not null,
   DAN_KH_ID            integer                        not null,
   DG_ID                integer                        not null,
   KH_ID                integer                        not null,
   DL_ID                integer                        not null,
   PH_ID                integer                        not null,
   PH_NOI_DUNG          long varchar                   null,
   constraint PK_PHAN_HOI primary key clustered (SAN_KH_ID, DAN_DL_ID, DH_ID, SP_ID, DAN_KH_ID, DG_ID, KH_ID, DL_ID, PH_ID)
);

/*==============================================================*/
/* Index: PHAN_HOI_PK                                           */
/*==============================================================*/
create unique clustered index PHAN_HOI_PK on PHAN_HOI (
SAN_KH_ID ASC,
DAN_DL_ID ASC,
DH_ID ASC,
SP_ID ASC,
DAN_KH_ID ASC,
DG_ID ASC,
KH_ID ASC,
DL_ID ASC,
PH_ID ASC
);

/*==============================================================*/
/* Index: PHAN_HOI_DANH_GIA_FK                                  */
/*==============================================================*/
create index PHAN_HOI_DANH_GIA_FK on PHAN_HOI (
SAN_KH_ID ASC,
DAN_DL_ID ASC,
DH_ID ASC,
SP_ID ASC,
DAN_KH_ID ASC,
DG_ID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_6_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_6_FK on PHAN_HOI (
KH_ID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_7_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_7_FK on PHAN_HOI (
DL_ID ASC
);

/*==============================================================*/
/* Table: SAN_PHAM                                              */
/*==============================================================*/
create or replace table SAN_PHAM 
(
   DL_ID                integer                        not null,
   KH_ID                integer                        not null,
   DH_ID                integer                        not null,
   SP_ID                integer                        not null,
   SP_TEN               long varchar                   null,
   SP_MOTASANPHAM       long varchar                   null,
   SP_SOLUONG           integer                        null,
   constraint PK_SAN_PHAM primary key clustered (KH_ID, DL_ID, DH_ID, SP_ID)
);

/*==============================================================*/
/* Index: SAN_PHAM_PK                                           */
/*==============================================================*/
create unique clustered index SAN_PHAM_PK on SAN_PHAM (
KH_ID ASC,
DL_ID ASC,
DH_ID ASC,
SP_ID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_15_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_15_FK on SAN_PHAM (
DL_ID ASC
);

/*==============================================================*/
/* Index: SAN_PHAM_TRONG_DON_HANG_FK                            */
/*==============================================================*/
create index SAN_PHAM_TRONG_DON_HANG_FK on SAN_PHAM (
KH_ID ASC,
DH_ID ASC
);

alter table CHI_TIET_DON_HANG
   add constraint FK_CHI_TIET_CHI_TIET__DON_HANG foreign key (DON_KH_ID, DH_ID)
      references DON_HANG (KH_ID, DH_ID)
      on update restrict
      on delete restrict;

alter table CHI_TIET_DON_HANG
   add constraint FK_CHI_TIET_CHI_TIET__SAN_PHAM foreign key (KH_ID, DL_ID, SAN_DH_ID, SP_ID)
      references SAN_PHAM (KH_ID, DL_ID, DH_ID, SP_ID)
      on update restrict
      on delete restrict;

alter table CHI_TIET_SAN_PHAM
   add constraint FK_CHI_TIET_CHI_TIET__SAN_PHAM foreign key (KH_ID, DL_ID, DH_ID, SP_ID)
      references SAN_PHAM (KH_ID, DL_ID, DH_ID, SP_ID)
      on update restrict
      on delete restrict;

alter table DANH_GIA
   add constraint FK_DANH_GIA_DANHGIASA_KHACH_HA foreign key (KH_ID)
      references KHACH_HANG (KH_ID)
      on update restrict
      on delete restrict;

alter table DANH_GIA
   add constraint FK_DANH_GIA_DANH_GIA__SAN_PHAM foreign key (SAN_KH_ID, DL_ID, DH_ID, SP_ID)
      references SAN_PHAM (KH_ID, DL_ID, DH_ID, SP_ID)
      on update restrict
      on delete restrict;

alter table DIA_CHI
   add constraint FK_DIA_CHI_DIA_CHI_D_DAI_LY foreign key (DL_ID)
      references DAI_LY (DL_ID)
      on update restrict
      on delete restrict;

alter table DIA_CHI
   add constraint FK_DIA_CHI_DIA_CHI_K_KHACH_HA foreign key (KH_ID)
      references KHACH_HANG (KH_ID)
      on update restrict
      on delete restrict;

alter table DON_HANG
   add constraint FK_DON_HANG_DON_HANG__KHACH_HA foreign key (KH_ID)
      references KHACH_HANG (KH_ID)
      on update restrict
      on delete restrict;

alter table GIA
   add constraint FK_GIA_SAN_PHAM__SAN_PHAM foreign key (KH_ID, DL_ID, DH_ID, SP_ID)
      references SAN_PHAM (KH_ID, DL_ID, DH_ID, SP_ID)
      on update restrict
      on delete restrict;

alter table HINH_ANH
   add constraint FK_HINH_ANH_HINH_ANH__SAN_PHAM foreign key (KH_ID, DL_ID, DH_ID, SP_ID)
      references SAN_PHAM (KH_ID, DL_ID, DH_ID, SP_ID)
      on update restrict
      on delete restrict;

alter table LOAI_CUA_SAN_PHAM
   add constraint FK_LOAI_CUA_LOAI_CUA__LOAI foreign key (LOAI_ID)
      references LOAI (LOAI_ID)
      on update restrict
      on delete restrict;

alter table LOAI_CUA_SAN_PHAM
   add constraint FK_LOAI_CUA_LOAI_CUA__SAN_PHAM foreign key (KH_ID, DL_ID, DH_ID, SP_ID)
      references SAN_PHAM (KH_ID, DL_ID, DH_ID, SP_ID)
      on update restrict
      on delete restrict;

alter table MA_KHUYEN_MAI
   add constraint FK_MA_KHUYE_DAI_LY_QU_DAI_LY foreign key (DL_ID)
      references DAI_LY (DL_ID)
      on update restrict
      on delete restrict;

alter table MA_KHUYEN_MAI
   add constraint FK_MA_KHUYE_MA_KHUYEN_KHACH_HA foreign key (KH_ID)
      references KHACH_HANG (KH_ID)
      on update restrict
      on delete restrict;

alter table MA_KHUYEN_MAI
   add constraint FK_MA_KHUYE_RELATIONS_DON_HANG foreign key (DON_KH_ID, DH_ID)
      references DON_HANG (KH_ID, DH_ID)
      on update restrict
      on delete restrict;

alter table MA_KHUYEN_MAI
   add constraint FK_MA_KHUYE_RELATIONS_LOAI_KHU foreign key (LKM_ID)
      references LOAI_KHUYEN_MAI (LKM_ID)
      on update restrict
      on delete restrict;

alter table PHAN_HOI
   add constraint FK_PHAN_HOI_PHAN_HOI__DANH_GIA foreign key (SAN_KH_ID, DAN_DL_ID, DH_ID, SP_ID, DAN_KH_ID, DG_ID)
      references DANH_GIA (SAN_KH_ID, DL_ID, DH_ID, SP_ID, KH_ID, DG_ID)
      on update restrict
      on delete restrict;

alter table PHAN_HOI
   add constraint FK_PHAN_HOI_RELATIONS_KHACH_HA foreign key (KH_ID)
      references KHACH_HANG (KH_ID)
      on update restrict
      on delete restrict;

alter table PHAN_HOI
   add constraint FK_PHAN_HOI_RELATIONS_DAI_LY foreign key (DL_ID)
      references DAI_LY (DL_ID)
      on update restrict
      on delete restrict;

alter table SAN_PHAM
   add constraint FK_SAN_PHAM_RELATIONS_DAI_LY foreign key (DL_ID)
      references DAI_LY (DL_ID)
      on update restrict
      on delete restrict;

alter table SAN_PHAM
   add constraint FK_SAN_PHAM_SAN_PHAM__DON_HANG foreign key (KH_ID, DH_ID)
      references DON_HANG (KH_ID, DH_ID)
      on update restrict
      on delete restrict;

