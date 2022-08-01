/*==============================================================*/
/* DBMS name:      Microsoft SQL Server 2016                    */
/* Created on:     7/31/2022 8:00:55 PM                         */
/*==============================================================*/


if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('CHI_TIET_DON_HANG') and o.name = 'FK_CHI_TIET_CHI_TIET__DON_HANG')
alter table CHI_TIET_DON_HANG
   drop constraint FK_CHI_TIET_CHI_TIET__DON_HANG
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('CHI_TIET_DON_HANG') and o.name = 'FK_CHI_TIET_CHI_TIET__SAN_PHAM')
alter table CHI_TIET_DON_HANG
   drop constraint FK_CHI_TIET_CHI_TIET__SAN_PHAM
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('CHI_TIET_SAN_PHAM') and o.name = 'FK_CTSP_SP')
alter table CHI_TIET_SAN_PHAM
   drop constraint FK_CTSP_SP
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('DANH_GIA') and o.name = 'FK_DANH_GIA_DANHGIASA_KHACH_HA')
alter table DANH_GIA
   drop constraint FK_DANH_GIA_DANHGIASA_KHACH_HA
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('DANH_GIA') and o.name = 'FK_DANH_GIA_DANH_GIA__SAN_PHAM')
alter table DANH_GIA
   drop constraint FK_DANH_GIA_DANH_GIA__SAN_PHAM
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('DIA_CHI') and o.name = 'FK_DIA_CHI_DIA_CHI_D_DAI_LY')
alter table DIA_CHI
   drop constraint FK_DIA_CHI_DIA_CHI_D_DAI_LY
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('DIA_CHI') and o.name = 'FK_DIA_CHI_DIA_CHI_K_KHACH_HA')
alter table DIA_CHI
   drop constraint FK_DIA_CHI_DIA_CHI_K_KHACH_HA
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('DON_HANG') and o.name = 'FK_DON_HANG_DON_HANG__KHACH_HA')
alter table DON_HANG
   drop constraint FK_DON_HANG_DON_HANG__KHACH_HA
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('GIA') and o.name = 'FK_GIA_SAN_PHAM__SAN_PHAM')
alter table GIA
   drop constraint FK_GIA_SAN_PHAM__SAN_PHAM
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('HINH_ANH') and o.name = 'FK_HINH_ANH_HINH_ANH__SAN_PHAM')
alter table HINH_ANH
   drop constraint FK_HINH_ANH_HINH_ANH__SAN_PHAM
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('LOAI_CUA_SAN_PHAM') and o.name = 'FK_LOAI_CUA_LOAI_CUA__LOAI')
alter table LOAI_CUA_SAN_PHAM
   drop constraint FK_LOAI_CUA_LOAI_CUA__LOAI
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('LOAI_CUA_SAN_PHAM') and o.name = 'FK_LOAI_CUA_LOAI_CUA__SAN_PHAM')
alter table LOAI_CUA_SAN_PHAM
   drop constraint FK_LOAI_CUA_LOAI_CUA__SAN_PHAM
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('MA_KHUYEN_MAI') and o.name = 'FK_MA_KHUYE_DAI_LY_QU_DAI_LY')
alter table MA_KHUYEN_MAI
   drop constraint FK_MA_KHUYE_DAI_LY_QU_DAI_LY
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('MA_KHUYEN_MAI') and o.name = 'FK_MA_KHUYE_MA_KHUYEN_KHACH_HA')
alter table MA_KHUYEN_MAI
   drop constraint FK_MA_KHUYE_MA_KHUYEN_KHACH_HA
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('MA_KHUYEN_MAI') and o.name = 'FK_MA_KHUYE_RELATIONS_DON_HANG')
alter table MA_KHUYEN_MAI
   drop constraint FK_MA_KHUYE_RELATIONS_DON_HANG
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('MA_KHUYEN_MAI') and o.name = 'FK_MA_KHUYE_RELATIONS_LOAI_KHU')
alter table MA_KHUYEN_MAI
   drop constraint FK_MA_KHUYE_RELATIONS_LOAI_KHU
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PHAN_HOI') and o.name = 'FK_PHAN_HOI_PHAN_HOI__DANH_GIA')
alter table PHAN_HOI
   drop constraint FK_PHAN_HOI_PHAN_HOI__DANH_GIA
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PHAN_HOI') and o.name = 'FK_PHAN_HOI_RELATIONS_KHACH_HA')
alter table PHAN_HOI
   drop constraint FK_PHAN_HOI_RELATIONS_KHACH_HA
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PHAN_HOI') and o.name = 'FK_PHAN_HOI_RELATIONS_DAI_LY')
alter table PHAN_HOI
   drop constraint FK_PHAN_HOI_RELATIONS_DAI_LY
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SAN_PHAM') and o.name = 'FK_SAN_PHAM_RELATIONS_DAI_LY')
alter table SAN_PHAM
   drop constraint FK_SAN_PHAM_RELATIONS_DAI_LY
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('CHI_TIET_DON_HANG')
            and   name  = 'CHI_TIET_DON_HANG2_FK'
            and   indid > 0
            and   indid < 255)
   drop index CHI_TIET_DON_HANG.CHI_TIET_DON_HANG2_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('CHI_TIET_DON_HANG')
            and   name  = 'CHI_TIET_DON_HANG_FK'
            and   indid > 0
            and   indid < 255)
   drop index CHI_TIET_DON_HANG.CHI_TIET_DON_HANG_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('CHI_TIET_DON_HANG')
            and   type = 'U')
   drop table CHI_TIET_DON_HANG
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('CHI_TIET_SAN_PHAM')
            and   name  = 'CHI_TIET_CUA_SAN_PHAM_FK'
            and   indid > 0
            and   indid < 255)
   drop index CHI_TIET_SAN_PHAM.CHI_TIET_CUA_SAN_PHAM_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('CHI_TIET_SAN_PHAM')
            and   type = 'U')
   drop table CHI_TIET_SAN_PHAM
go

if exists (select 1
            from  sysobjects
           where  id = object_id('DAI_LY')
            and   type = 'U')
   drop table DAI_LY
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('DANH_GIA')
            and   name  = 'DANHGIASANPHAM_FK'
            and   indid > 0
            and   indid < 255)
   drop index DANH_GIA.DANHGIASANPHAM_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('DANH_GIA')
            and   name  = 'DANH_GIA_CUA_SAN_PHAM_FK'
            and   indid > 0
            and   indid < 255)
   drop index DANH_GIA.DANH_GIA_CUA_SAN_PHAM_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('DANH_GIA')
            and   type = 'U')
   drop table DANH_GIA
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('DIA_CHI')
            and   name  = 'DIA_CHI_KHACH_HANG_FK'
            and   indid > 0
            and   indid < 255)
   drop index DIA_CHI.DIA_CHI_KHACH_HANG_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('DIA_CHI')
            and   name  = 'DIA_CHI_DAI_LY_FK'
            and   indid > 0
            and   indid < 255)
   drop index DIA_CHI.DIA_CHI_DAI_LY_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('DIA_CHI')
            and   type = 'U')
   drop table DIA_CHI
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('DON_HANG')
            and   name  = 'DON_HANG_CUA_KHACH_HANG_FK'
            and   indid > 0
            and   indid < 255)
   drop index DON_HANG.DON_HANG_CUA_KHACH_HANG_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('DON_HANG')
            and   type = 'U')
   drop table DON_HANG
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('GIA')
            and   name  = 'SAN_PHAM_CO_GIA_FK'
            and   indid > 0
            and   indid < 255)
   drop index GIA.SAN_PHAM_CO_GIA_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('GIA')
            and   type = 'U')
   drop table GIA
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('HINH_ANH')
            and   name  = 'HINH_ANH_CUA_SAN_PHAM_FK'
            and   indid > 0
            and   indid < 255)
   drop index HINH_ANH.HINH_ANH_CUA_SAN_PHAM_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('HINH_ANH')
            and   type = 'U')
   drop table HINH_ANH
go

if exists (select 1
            from  sysobjects
           where  id = object_id('KHACH_HANG')
            and   type = 'U')
   drop table KHACH_HANG
go

if exists (select 1
            from  sysobjects
           where  id = object_id('LOAI')
            and   type = 'U')
   drop table LOAI
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('LOAI_CUA_SAN_PHAM')
            and   name  = 'LOAI_CUA_SAN_PHAM2_FK'
            and   indid > 0
            and   indid < 255)
   drop index LOAI_CUA_SAN_PHAM.LOAI_CUA_SAN_PHAM2_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('LOAI_CUA_SAN_PHAM')
            and   name  = 'LOAI_CUA_SAN_PHAM_FK'
            and   indid > 0
            and   indid < 255)
   drop index LOAI_CUA_SAN_PHAM.LOAI_CUA_SAN_PHAM_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('LOAI_CUA_SAN_PHAM')
            and   type = 'U')
   drop table LOAI_CUA_SAN_PHAM
go

if exists (select 1
            from  sysobjects
           where  id = object_id('LOAI_KHUYEN_MAI')
            and   type = 'U')
   drop table LOAI_KHUYEN_MAI
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('MA_KHUYEN_MAI')
            and   name  = 'RELATIONSHIP_21_FK'
            and   indid > 0
            and   indid < 255)
   drop index MA_KHUYEN_MAI.RELATIONSHIP_21_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('MA_KHUYEN_MAI')
            and   name  = 'RELATIONSHIP_20_FK'
            and   indid > 0
            and   indid < 255)
   drop index MA_KHUYEN_MAI.RELATIONSHIP_20_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('MA_KHUYEN_MAI')
            and   name  = 'MA_KHUYEN_MAI_TANG_KHACH_HANG_FK'
            and   indid > 0
            and   indid < 255)
   drop index MA_KHUYEN_MAI.MA_KHUYEN_MAI_TANG_KHACH_HANG_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('MA_KHUYEN_MAI')
            and   name  = 'DAI_LY_QUAN_LY_MA_KHUYEN_MAI_FK'
            and   indid > 0
            and   indid < 255)
   drop index MA_KHUYEN_MAI.DAI_LY_QUAN_LY_MA_KHUYEN_MAI_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('MA_KHUYEN_MAI')
            and   type = 'U')
   drop table MA_KHUYEN_MAI
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('PHAN_HOI')
            and   name  = 'RELATIONSHIP_7_FK'
            and   indid > 0
            and   indid < 255)
   drop index PHAN_HOI.RELATIONSHIP_7_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('PHAN_HOI')
            and   name  = 'RELATIONSHIP_6_FK'
            and   indid > 0
            and   indid < 255)
   drop index PHAN_HOI.RELATIONSHIP_6_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('PHAN_HOI')
            and   name  = 'PHAN_HOI_DANH_GIA_FK'
            and   indid > 0
            and   indid < 255)
   drop index PHAN_HOI.PHAN_HOI_DANH_GIA_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('PHAN_HOI')
            and   type = 'U')
   drop table PHAN_HOI
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SAN_PHAM')
            and   type = 'U')
   drop table SAN_PHAM
go

/*==============================================================*/
/* Table: CHI_TIET_DON_HANG                                     */
/*==============================================================*/
create table CHI_TIET_DON_HANG (
   KH_ID                bigint               not null,
   DH_ID                bigint               not null,
   DL_ID                bigint               not null,
   SP_ID                bigint               not null,
   constraint PK_CHI_TIET_DON_HANG primary key (KH_ID, DL_ID, DH_ID, SP_ID)
)
go

/*==============================================================*/
/* Index: CHI_TIET_DON_HANG_FK                                  */
/*==============================================================*/




create nonclustered index CHI_TIET_DON_HANG_FK on CHI_TIET_DON_HANG (DH_ID ASC)
go

/*==============================================================*/
/* Index: CHI_TIET_DON_HANG2_FK                                 */
/*==============================================================*/




create nonclustered index CHI_TIET_DON_HANG2_FK on CHI_TIET_DON_HANG (SP_ID ASC)
go

/*==============================================================*/
/* Table: CHI_TIET_SAN_PHAM                                     */
/*==============================================================*/
create table CHI_TIET_SAN_PHAM (
   SP_ID                bigint               not null,
   CTSP_ID              bigint               not null,
   CTSP_TIEUDE          text                 null,
   CTSP_NOIDUNG         text                 null,
   constraint PK_CHI_TIET_SAN_PHAM primary key (SP_ID, CTSP_ID)
)
go

/*==============================================================*/
/* Index: CHI_TIET_CUA_SAN_PHAM_FK                              */
/*==============================================================*/




create nonclustered index CHI_TIET_CUA_SAN_PHAM_FK on CHI_TIET_SAN_PHAM (SP_ID ASC)
go

/*==============================================================*/
/* Table: DAI_LY                                                */
/*==============================================================*/
create table DAI_LY (
   DL_ID                bigint               not null,
   DL_TEN               text                 null,
   DL_AVATAR            text                 null,
   DL_EMAIL             text                 null,
   DL_SDT               text                 null,
   DL_CMND              text                 null,
   constraint PK_DAI_LY primary key (DL_ID)
)
go

/*==============================================================*/
/* Table: DANH_GIA                                              */
/*==============================================================*/
create table DANH_GIA (
   SAN_KH_ID            bigint               not null,
   DL_ID                bigint               not null,
   DH_ID                bigint               not null,
   SP_ID                bigint               not null,
   KH_ID                bigint               not null,
   DG_ID                bigint               not null,
   DG_NOIDUNG           text                 null,
   DG_SOSAO             tinyint              null,
   DG_LIKE              bigint               null,
   constraint PK_DANH_GIA primary key (SAN_KH_ID, DL_ID, DH_ID, SP_ID, KH_ID, DG_ID)
)
go

/*==============================================================*/
/* Index: DANH_GIA_CUA_SAN_PHAM_FK                              */
/*==============================================================*/




create nonclustered index DANH_GIA_CUA_SAN_PHAM_FK on DANH_GIA (SP_ID ASC)
go

/*==============================================================*/
/* Index: DANHGIASANPHAM_FK                                     */
/*==============================================================*/




create nonclustered index DANHGIASANPHAM_FK on DANH_GIA (KH_ID ASC)
go

/*==============================================================*/
/* Table: DIA_CHI                                               */
/*==============================================================*/
create table DIA_CHI (
   DL_ID                bigint               not null,
   KH_ID                bigint               not null,
   DC_ID                bigint               not null,
   DC_TINH              text                 null,
   DC_QUAN              text                 null,
   DC_PHUONG            text                 null,
   DC_CHITIET           text                 null,
   constraint PK_DIA_CHI primary key (DL_ID, KH_ID, DC_ID)
)
go

/*==============================================================*/
/* Index: DIA_CHI_DAI_LY_FK                                     */
/*==============================================================*/




create nonclustered index DIA_CHI_DAI_LY_FK on DIA_CHI (DL_ID ASC)
go

/*==============================================================*/
/* Index: DIA_CHI_KHACH_HANG_FK                                 */
/*==============================================================*/




create nonclustered index DIA_CHI_KHACH_HANG_FK on DIA_CHI (KH_ID ASC)
go

/*==============================================================*/
/* Table: DON_HANG                                              */
/*==============================================================*/
create table DON_HANG (
   KH_ID                bigint               not null,
   DH_ID                bigint               not null,
   DH_SOLUONG           bigint               null,
   DH_TONGGIA           float                null,
   constraint PK_DON_HANG primary key (DH_ID)
)
go

/*==============================================================*/
/* Index: DON_HANG_CUA_KHACH_HANG_FK                            */
/*==============================================================*/




create nonclustered index DON_HANG_CUA_KHACH_HANG_FK on DON_HANG (KH_ID ASC)
go

/*==============================================================*/
/* Table: GIA                                                   */
/*==============================================================*/
create table GIA (
   SP_ID                bigint               not null,
   G_ID                 bigint               not null,
   G_TUNGAY             datetime             null,
   G_GIA                float                null,
   constraint PK_GIA primary key (SP_ID, G_ID)
)
go

/*==============================================================*/
/* Index: SAN_PHAM_CO_GIA_FK                                    */
/*==============================================================*/




create nonclustered index SAN_PHAM_CO_GIA_FK on GIA (SP_ID ASC)
go

/*==============================================================*/
/* Table: HINH_ANH                                              */
/*==============================================================*/
create table HINH_ANH (
   SP_ID                bigint               not null,
   HINH_ID              bigint               not null,
   HINH_URL             text                 null,
   constraint PK_HINH_ANH primary key (SP_ID, HINH_ID)
)
go

/*==============================================================*/
/* Index: HINH_ANH_CUA_SAN_PHAM_FK                              */
/*==============================================================*/




create nonclustered index HINH_ANH_CUA_SAN_PHAM_FK on HINH_ANH (SP_ID ASC)
go

/*==============================================================*/
/* Table: KHACH_HANG                                            */
/*==============================================================*/
create table KHACH_HANG (
   KH_ID                bigint               not null,
   KH_HO                text                 null,
   KH_TEN               text                 null,
   KH_AVATAR            text                 null,
   KH_EMAIL             text                 null,
   KH_SDT               text                 null,
   KH_NGAYSINH          datetime             null,
   KH_GIOITINH          tinyint              null,
   constraint PK_KHACH_HANG primary key (KH_ID)
)
go

/*==============================================================*/
/* Table: LOAI                                                  */
/*==============================================================*/
create table LOAI (
   LOAI_ID              bigint               not null,
   LOAI_TEN             text                 null,
   constraint PK_LOAI primary key (LOAI_ID)
)
go

/*==============================================================*/
/* Table: LOAI_CUA_SAN_PHAM                                     */
/*==============================================================*/
create table LOAI_CUA_SAN_PHAM (
   LOAI_ID              bigint               not null,
   SP_ID                bigint               not null,
   constraint PK_LOAI_CUA_SAN_PHAM primary key (LOAI_ID, SP_ID)
)
go

/*==============================================================*/
/* Index: LOAI_CUA_SAN_PHAM_FK                                  */
/*==============================================================*/




create nonclustered index LOAI_CUA_SAN_PHAM_FK on LOAI_CUA_SAN_PHAM (LOAI_ID ASC)
go

/*==============================================================*/
/* Index: LOAI_CUA_SAN_PHAM2_FK                                 */
/*==============================================================*/




create nonclustered index LOAI_CUA_SAN_PHAM2_FK on LOAI_CUA_SAN_PHAM (SP_ID ASC)
go

/*==============================================================*/
/* Table: LOAI_KHUYEN_MAI                                       */
/*==============================================================*/
create table LOAI_KHUYEN_MAI (
   LKM_ID               bigint               not null,
   LKM_TENLOAI          bigint               null,
   constraint PK_LOAI_KHUYEN_MAI primary key (LKM_ID)
)
go

/*==============================================================*/
/* Table: MA_KHUYEN_MAI                                         */
/*==============================================================*/
create table MA_KHUYEN_MAI (
   DL_ID                bigint               not null,
   KH_ID                bigint               not null,
   DON_KH_ID            bigint               not null,
   DH_ID                bigint               not null,
   LKM_ID               bigint               not null,
   MKM_ID               bigint               not null,
   MKM_TEN              text                 null,
   MKM_MUCKHUYENMAI     float                null,
   MKM_NOIDUNG          text                 null,
   MKM_TIEUDE           text                 null,
   constraint PK_MA_KHUYEN_MAI primary key (DON_KH_ID, DL_ID, KH_ID, DH_ID, LKM_ID, MKM_ID)
)
go

/*==============================================================*/
/* Index: DAI_LY_QUAN_LY_MA_KHUYEN_MAI_FK                       */
/*==============================================================*/




create nonclustered index DAI_LY_QUAN_LY_MA_KHUYEN_MAI_FK on MA_KHUYEN_MAI (DL_ID ASC)
go

/*==============================================================*/
/* Index: MA_KHUYEN_MAI_TANG_KHACH_HANG_FK                      */
/*==============================================================*/




create nonclustered index MA_KHUYEN_MAI_TANG_KHACH_HANG_FK on MA_KHUYEN_MAI (KH_ID ASC)
go

/*==============================================================*/
/* Index: RELATIONSHIP_20_FK                                    */
/*==============================================================*/




create nonclustered index RELATIONSHIP_20_FK on MA_KHUYEN_MAI (DH_ID ASC)
go

/*==============================================================*/
/* Index: RELATIONSHIP_21_FK                                    */
/*==============================================================*/




create nonclustered index RELATIONSHIP_21_FK on MA_KHUYEN_MAI (LKM_ID ASC)
go

/*==============================================================*/
/* Table: PHAN_HOI                                              */
/*==============================================================*/
create table PHAN_HOI (
   SAN_KH_ID            bigint               not null,
   DAN_DL_ID            bigint               not null,
   DH_ID                bigint               not null,
   SP_ID                bigint               not null,
   DAN_KH_ID            bigint               not null,
   DG_ID                bigint               not null,
   KH_ID                bigint               not null,
   DL_ID                bigint               not null,
   PH_ID                bigint               not null,
   PH_NOI_DUNG          text                 null,
   constraint PK_PHAN_HOI primary key (SAN_KH_ID, DAN_DL_ID, DH_ID, SP_ID, DAN_KH_ID, DG_ID, KH_ID, DL_ID, PH_ID)
)
go

/*==============================================================*/
/* Index: PHAN_HOI_DANH_GIA_FK                                  */
/*==============================================================*/




create nonclustered index PHAN_HOI_DANH_GIA_FK on PHAN_HOI (SAN_KH_ID ASC,
  DAN_DL_ID ASC,
  DH_ID ASC,
  SP_ID ASC,
  DAN_KH_ID ASC,
  DG_ID ASC)
go

/*==============================================================*/
/* Index: RELATIONSHIP_6_FK                                     */
/*==============================================================*/




create nonclustered index RELATIONSHIP_6_FK on PHAN_HOI (KH_ID ASC)
go

/*==============================================================*/
/* Index: RELATIONSHIP_7_FK                                     */
/*==============================================================*/




create nonclustered index RELATIONSHIP_7_FK on PHAN_HOI (DL_ID ASC)
go

/*==============================================================*/
/* Table: SAN_PHAM                                              */
/*==============================================================*/
create table SAN_PHAM (
   DL_ID                bigint               not null,
   SP_ID                bigint               not null,
   SP_TEN               text                 null,
   SP_MOTASANPHAM       text                 null,
   SP_SOLUONG           bigint               null,
   constraint PK_SAN_PHAM primary key (SP_ID)
)
go

alter table CHI_TIET_DON_HANG
   add constraint FK_CHI_TIET_CHI_TIET__DON_HANG foreign key (DH_ID)
      references DON_HANG (DH_ID)
go

alter table CHI_TIET_DON_HANG
   add constraint FK_CHI_TIET_CHI_TIET__SAN_PHAM foreign key (SP_ID)
      references SAN_PHAM (SP_ID)
go

alter table CHI_TIET_SAN_PHAM
   add constraint FK_CTSP_SP foreign key (SP_ID)
      references SAN_PHAM (SP_ID)
go

alter table DANH_GIA
   add constraint FK_DANH_GIA_DANHGIASA_KHACH_HA foreign key (KH_ID)
      references KHACH_HANG (KH_ID)
go

alter table DANH_GIA
   add constraint FK_DANH_GIA_DANH_GIA__SAN_PHAM foreign key (SP_ID)
      references SAN_PHAM (SP_ID)
go

alter table DIA_CHI
   add constraint FK_DIA_CHI_DIA_CHI_D_DAI_LY foreign key (DL_ID)
      references DAI_LY (DL_ID)
go

alter table DIA_CHI
   add constraint FK_DIA_CHI_DIA_CHI_K_KHACH_HA foreign key (KH_ID)
      references KHACH_HANG (KH_ID)
go

alter table DON_HANG
   add constraint FK_DON_HANG_DON_HANG__KHACH_HA foreign key (KH_ID)
      references KHACH_HANG (KH_ID)
go

alter table GIA
   add constraint FK_GIA_SAN_PHAM__SAN_PHAM foreign key (SP_ID)
      references SAN_PHAM (SP_ID)
go

alter table HINH_ANH
   add constraint FK_HINH_ANH_HINH_ANH__SAN_PHAM foreign key (SP_ID)
      references SAN_PHAM (SP_ID)
go

alter table LOAI_CUA_SAN_PHAM
   add constraint FK_LOAI_CUA_LOAI_CUA__LOAI foreign key (LOAI_ID)
      references LOAI (LOAI_ID)
go

alter table LOAI_CUA_SAN_PHAM
   add constraint FK_LOAI_CUA_LOAI_CUA__SAN_PHAM foreign key (SP_ID)
      references SAN_PHAM (SP_ID)
go

alter table MA_KHUYEN_MAI
   add constraint FK_MA_KHUYE_DAI_LY_QU_DAI_LY foreign key (DL_ID)
      references DAI_LY (DL_ID)
go

alter table MA_KHUYEN_MAI
   add constraint FK_MA_KHUYE_MA_KHUYEN_KHACH_HA foreign key (KH_ID)
      references KHACH_HANG (KH_ID)
go

alter table MA_KHUYEN_MAI
   add constraint FK_MA_KHUYE_RELATIONS_DON_HANG foreign key (DH_ID)
      references DON_HANG (DH_ID)
go

alter table MA_KHUYEN_MAI
   add constraint FK_MA_KHUYE_RELATIONS_LOAI_KHU foreign key (LKM_ID)
      references LOAI_KHUYEN_MAI (LKM_ID)
go

alter table PHAN_HOI
   add constraint FK_PHAN_HOI_PHAN_HOI__DANH_GIA foreign key (SAN_KH_ID, DAN_DL_ID, DH_ID, SP_ID, DAN_KH_ID, DG_ID)
      references DANH_GIA (SAN_KH_ID, DL_ID, DH_ID, SP_ID, KH_ID, DG_ID)
go

alter table PHAN_HOI
   add constraint FK_PHAN_HOI_RELATIONS_KHACH_HA foreign key (KH_ID)
      references KHACH_HANG (KH_ID)
go

alter table PHAN_HOI
   add constraint FK_PHAN_HOI_RELATIONS_DAI_LY foreign key (DL_ID)
      references DAI_LY (DL_ID)
go

alter table SAN_PHAM
   add constraint FK_SAN_PHAM_RELATIONS_DAI_LY foreign key (DL_ID)
      references DAI_LY (DL_ID)
go

