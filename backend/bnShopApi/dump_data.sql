--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--

DROP DATABASE bnshop;




--
-- Drop roles
--

DROP ROLE postgres;


--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:wiQ/Op5UkjVwBGFNfTeAbg==$dNf4/zKDkEwcNz8UxgmORbJK9JHZYehfuR6sbIktRYk=:YBCtwXUJq4v26d/vfjaqm8oFF+wBEwcvxgptJY/jW9M=';

--
-- User Configurations
--








--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Debian 15.1-1.pgdg110+1)
-- Dumped by pg_dump version 15.1 (Debian 15.1-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO postgres;

\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: postgres
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: postgres
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "bnshop" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Debian 15.1-1.pgdg110+1)
-- Dumped by pg_dump version 15.1 (Debian 15.1-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: bnshop; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE bnshop WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE bnshop OWNER TO postgres;

\connect bnshop

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: accounts_account; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.accounts_account (
    id bigint NOT NULL,
    password character varying(128) NOT NULL,
    phone character varying(10) NOT NULL,
    date_joined timestamp with time zone NOT NULL,
    last_login timestamp with time zone NOT NULL,
    is_admin boolean NOT NULL,
    is_staff boolean NOT NULL,
    is_superuser boolean NOT NULL,
    is_customer boolean NOT NULL,
    is_agency boolean NOT NULL,
    is_active boolean NOT NULL,
    is_shipper boolean NOT NULL
);


ALTER TABLE public.accounts_account OWNER TO postgres;

--
-- Name: accounts_account_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.accounts_account_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_account_id_seq OWNER TO postgres;

--
-- Name: accounts_account_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.accounts_account_id_seq OWNED BY public.accounts_account.id;


--
-- Name: accounts_agency; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.accounts_agency (
    id bigint NOT NULL,
    main_industry character varying(100) NOT NULL,
    identify character varying(12) NOT NULL,
    user_id bigint NOT NULL
);


ALTER TABLE public.accounts_agency OWNER TO postgres;

--
-- Name: accounts_agency_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.accounts_agency_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_agency_id_seq OWNER TO postgres;

--
-- Name: accounts_agency_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.accounts_agency_id_seq OWNED BY public.accounts_agency.id;


--
-- Name: accounts_customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.accounts_customer (
    id bigint NOT NULL,
    nickname character varying(100),
    birthday date NOT NULL,
    user_id bigint NOT NULL
);


ALTER TABLE public.accounts_customer OWNER TO postgres;

--
-- Name: accounts_customer_follow; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.accounts_customer_follow (
    id bigint NOT NULL,
    customer_id bigint NOT NULL,
    agency_id bigint NOT NULL
);


ALTER TABLE public.accounts_customer_follow OWNER TO postgres;

--
-- Name: accounts_customer_follow_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.accounts_customer_follow_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_customer_follow_id_seq OWNER TO postgres;

--
-- Name: accounts_customer_follow_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.accounts_customer_follow_id_seq OWNED BY public.accounts_customer_follow.id;


--
-- Name: accounts_customer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.accounts_customer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_customer_id_seq OWNER TO postgres;

--
-- Name: accounts_customer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.accounts_customer_id_seq OWNED BY public.accounts_customer.id;


--
-- Name: accounts_shipper; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.accounts_shipper (
    id bigint NOT NULL,
    "companyName" character varying(3000) NOT NULL,
    user_id bigint NOT NULL
);


ALTER TABLE public.accounts_shipper OWNER TO postgres;

--
-- Name: accounts_shipper_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.accounts_shipper_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_shipper_id_seq OWNER TO postgres;

--
-- Name: accounts_shipper_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.accounts_shipper_id_seq OWNED BY public.accounts_shipper.id;


--
-- Name: accounts_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.accounts_users (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(254),
    avatar character varying(3000) NOT NULL,
    nationality character varying(100),
    account_id bigint NOT NULL,
    gender character varying(1) NOT NULL
);


ALTER TABLE public.accounts_users OWNER TO postgres;

--
-- Name: accounts_users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.accounts_users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_users_id_seq OWNER TO postgres;

--
-- Name: accounts_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.accounts_users_id_seq OWNED BY public.accounts_users.id;


--
-- Name: accounts_visit; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.accounts_visit (
    id bigint NOT NULL,
    time_visited double precision NOT NULL,
    number_product integer NOT NULL,
    lasted_visited timestamp with time zone NOT NULL,
    agency_id bigint NOT NULL,
    customer_id bigint NOT NULL
);


ALTER TABLE public.accounts_visit OWNER TO postgres;

--
-- Name: accounts_visit_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.accounts_visit_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_visit_id_seq OWNER TO postgres;

--
-- Name: accounts_visit_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.accounts_visit_id_seq OWNED BY public.accounts_visit.id;


--
-- Name: address_address; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.address_address (
    id bigint NOT NULL,
    province character varying(100) NOT NULL,
    district character varying(100) NOT NULL,
    ward character varying(100) NOT NULL,
    detail text,
    type character varying(100) NOT NULL,
    user_id bigint NOT NULL,
    is_approved boolean NOT NULL,
    is_default boolean NOT NULL,
    is_delete boolean NOT NULL
);


ALTER TABLE public.address_address OWNER TO postgres;

--
-- Name: address_address_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.address_address_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.address_address_id_seq OWNER TO postgres;

--
-- Name: address_address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.address_address_id_seq OWNED BY public.address_address.id;


--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO postgres;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO postgres;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_group_permissions (
    id bigint NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO postgres;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO postgres;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO postgres;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO postgres;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id bigint NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO postgres;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO postgres;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO postgres;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO postgres;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.django_migrations (
    id bigint NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO postgres;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.django_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO postgres;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO postgres;

--
-- Name: orders_cancel; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders_cancel (
    id bigint NOT NULL,
    reason character varying(100) NOT NULL,
    detail text NOT NULL
);


ALTER TABLE public.orders_cancel OWNER TO postgres;

--
-- Name: orders_cancel_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_cancel_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_cancel_id_seq OWNER TO postgres;

--
-- Name: orders_cancel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_cancel_id_seq OWNED BY public.orders_cancel.id;


--
-- Name: orders_order; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders_order (
    id bigint NOT NULL,
    qty integer NOT NULL,
    amount double precision NOT NULL,
    customer_id bigint NOT NULL,
    order_detail_id bigint,
    product_id bigint NOT NULL
);


ALTER TABLE public.orders_order OWNER TO postgres;

--
-- Name: orders_order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_order_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_order_id_seq OWNER TO postgres;

--
-- Name: orders_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders_order.id;


--
-- Name: orders_orderdetail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders_orderdetail (
    id bigint NOT NULL,
    total double precision,
    date_order timestamp with time zone NOT NULL,
    date_receive timestamp with time zone,
    status character varying(100) NOT NULL,
    address_id bigint,
    payment_id bigint,
    shipper_id bigint,
    customer_id bigint NOT NULL,
    agency_id bigint
);


ALTER TABLE public.orders_orderdetail OWNER TO postgres;

--
-- Name: orders_orderdetail_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_orderdetail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_orderdetail_id_seq OWNER TO postgres;

--
-- Name: orders_orderdetail_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_orderdetail_id_seq OWNED BY public.orders_orderdetail.id;


--
-- Name: orders_payment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders_payment (
    id bigint NOT NULL,
    name character varying(100) NOT NULL
);


ALTER TABLE public.orders_payment OWNER TO postgres;

--
-- Name: orders_payment_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_payment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_payment_id_seq OWNER TO postgres;

--
-- Name: orders_payment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_payment_id_seq OWNED BY public.orders_payment.id;


--
-- Name: orders_statusshippingnote; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders_statusshippingnote (
    id bigint NOT NULL,
    substatus integer NOT NULL,
    note text NOT NULL,
    order_detail_id bigint NOT NULL,
    date_note timestamp with time zone NOT NULL,
    shipper_id bigint NOT NULL,
    image character varying(3000)
);


ALTER TABLE public.orders_statusshippingnote OWNER TO postgres;

--
-- Name: orders_statusshippingnote_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_statusshippingnote_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_statusshippingnote_id_seq OWNER TO postgres;

--
-- Name: orders_statusshippingnote_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_statusshippingnote_id_seq OWNED BY public.orders_statusshippingnote.id;


--
-- Name: products_attachment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_attachment (
    id bigint NOT NULL,
    url character varying(3000) NOT NULL,
    type character varying(100) NOT NULL,
    product_id bigint NOT NULL
);


ALTER TABLE public.products_attachment OWNER TO postgres;

--
-- Name: products_attachment_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_attachment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_attachment_id_seq OWNER TO postgres;

--
-- Name: products_attachment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_attachment_id_seq OWNED BY public.products_attachment.id;


--
-- Name: products_brand; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_brand (
    id bigint NOT NULL,
    origin character varying(100) NOT NULL,
    origin_brand character varying(100) NOT NULL,
    name character varying(100)
);


ALTER TABLE public.products_brand OWNER TO postgres;

--
-- Name: products_brand_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_brand_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_brand_id_seq OWNER TO postgres;

--
-- Name: products_brand_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_brand_id_seq OWNED BY public.products_brand.id;


--
-- Name: products_category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_category (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    agency_id bigint NOT NULL
);


ALTER TABLE public.products_category OWNER TO postgres;

--
-- Name: products_category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_category_id_seq OWNER TO postgres;

--
-- Name: products_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_category_id_seq OWNED BY public.products_category.id;


--
-- Name: products_describe; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_describe (
    id bigint NOT NULL,
    content text NOT NULL
);


ALTER TABLE public.products_describe OWNER TO postgres;

--
-- Name: products_describe_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_describe_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_describe_id_seq OWNER TO postgres;

--
-- Name: products_describe_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_describe_id_seq OWNED BY public.products_describe.id;


--
-- Name: products_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_detail (
    id bigint NOT NULL,
    title character varying(100) NOT NULL,
    content character varying(100) NOT NULL
);


ALTER TABLE public.products_detail OWNER TO postgres;

--
-- Name: products_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_detail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_detail_id_seq OWNER TO postgres;

--
-- Name: products_detail_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_detail_id_seq OWNED BY public.products_detail.id;


--
-- Name: products_price; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_price (
    id bigint NOT NULL,
    price double precision NOT NULL,
    from_datetime timestamp with time zone NOT NULL,
    end_datetime timestamp with time zone,
    product_id bigint NOT NULL
);


ALTER TABLE public.products_price OWNER TO postgres;

--
-- Name: products_price_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_price_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_price_id_seq OWNER TO postgres;

--
-- Name: products_price_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_price_id_seq OWNED BY public.products_price.id;


--
-- Name: products_product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_product (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    display_image character varying(30000) NOT NULL,
    is_approved boolean NOT NULL,
    is_delete boolean NOT NULL,
    brand_id bigint NOT NULL,
    describe_id bigint
);


ALTER TABLE public.products_product OWNER TO postgres;

--
-- Name: products_product_agency; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_product_agency (
    id bigint NOT NULL,
    product_id bigint NOT NULL,
    agency_id bigint NOT NULL
);


ALTER TABLE public.products_product_agency OWNER TO postgres;

--
-- Name: products_product_agency_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_product_agency_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_product_agency_id_seq OWNER TO postgres;

--
-- Name: products_product_agency_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_product_agency_id_seq OWNED BY public.products_product_agency.id;


--
-- Name: products_product_category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_product_category (
    id bigint NOT NULL,
    product_id bigint NOT NULL,
    category_id bigint NOT NULL
);


ALTER TABLE public.products_product_category OWNER TO postgres;

--
-- Name: products_product_category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_product_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_product_category_id_seq OWNER TO postgres;

--
-- Name: products_product_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_product_category_id_seq OWNED BY public.products_product_category.id;


--
-- Name: products_product_customer_bought; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_product_customer_bought (
    id bigint NOT NULL,
    product_id bigint NOT NULL,
    customer_id bigint NOT NULL
);


ALTER TABLE public.products_product_customer_bought OWNER TO postgres;

--
-- Name: products_product_customer_bought_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_product_customer_bought_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_product_customer_bought_id_seq OWNER TO postgres;

--
-- Name: products_product_customer_bought_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_product_customer_bought_id_seq OWNED BY public.products_product_customer_bought.id;


--
-- Name: products_product_customer_favorite; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_product_customer_favorite (
    id bigint NOT NULL,
    product_id bigint NOT NULL,
    customer_id bigint NOT NULL
);


ALTER TABLE public.products_product_customer_favorite OWNER TO postgres;

--
-- Name: products_product_customer_favorite_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_product_customer_favorite_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_product_customer_favorite_id_seq OWNER TO postgres;

--
-- Name: products_product_customer_favorite_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_product_customer_favorite_id_seq OWNED BY public.products_product_customer_favorite.id;


--
-- Name: products_product_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_product_detail (
    id bigint NOT NULL,
    product_id bigint NOT NULL,
    detail_id bigint NOT NULL
);


ALTER TABLE public.products_product_detail OWNER TO postgres;

--
-- Name: products_product_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_product_detail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_product_detail_id_seq OWNER TO postgres;

--
-- Name: products_product_detail_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_product_detail_id_seq OWNED BY public.products_product_detail.id;


--
-- Name: products_product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_product_id_seq OWNER TO postgres;

--
-- Name: products_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products_product.id;


--
-- Name: products_product_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_product_type (
    id bigint NOT NULL,
    product_id bigint NOT NULL,
    type_id bigint NOT NULL
);


ALTER TABLE public.products_product_type OWNER TO postgres;

--
-- Name: products_product_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_product_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_product_type_id_seq OWNER TO postgres;

--
-- Name: products_product_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_product_type_id_seq OWNED BY public.products_product_type.id;


--
-- Name: products_quantity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_quantity (
    id bigint NOT NULL,
    quantity integer NOT NULL,
    note character varying(100) NOT NULL,
    from_date timestamp with time zone NOT NULL,
    product_id bigint NOT NULL,
    change_num integer,
    customer_id bigint,
    price_once double precision,
    types integer
);


ALTER TABLE public.products_quantity OWNER TO postgres;

--
-- Name: products_quantity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_quantity_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_quantity_id_seq OWNER TO postgres;

--
-- Name: products_quantity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_quantity_id_seq OWNED BY public.products_quantity.id;


--
-- Name: products_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products_type (
    id bigint NOT NULL,
    name character varying(20) NOT NULL
);


ALTER TABLE public.products_type OWNER TO postgres;

--
-- Name: products_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_type_id_seq OWNER TO postgres;

--
-- Name: products_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_type_id_seq OWNED BY public.products_type.id;


--
-- Name: rating_image; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rating_image (
    id bigint NOT NULL,
    image_url character varying(100) NOT NULL,
    type integer NOT NULL,
    rate_id bigint NOT NULL
);


ALTER TABLE public.rating_image OWNER TO postgres;

--
-- Name: rating_image_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rating_image_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rating_image_id_seq OWNER TO postgres;

--
-- Name: rating_image_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rating_image_id_seq OWNED BY public.rating_image.id;


--
-- Name: rating_rate; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rating_rate (
    id bigint NOT NULL,
    title character varying(100) NOT NULL,
    content text NOT NULL,
    star integer NOT NULL,
    date_created timestamp with time zone NOT NULL,
    customer_id bigint NOT NULL,
    product_id bigint NOT NULL,
    is_approved boolean NOT NULL
);


ALTER TABLE public.rating_rate OWNER TO postgres;

--
-- Name: rating_rate_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rating_rate_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rating_rate_id_seq OWNER TO postgres;

--
-- Name: rating_rate_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rating_rate_id_seq OWNED BY public.rating_rate.id;


--
-- Name: rating_reply; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rating_reply (
    id bigint NOT NULL,
    content text NOT NULL,
    date_created timestamp with time zone NOT NULL,
    rate_id bigint NOT NULL,
    user_id bigint NOT NULL,
    is_approved boolean NOT NULL
);


ALTER TABLE public.rating_reply OWNER TO postgres;

--
-- Name: rating_reply_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rating_reply_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rating_reply_id_seq OWNER TO postgres;

--
-- Name: rating_reply_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rating_reply_id_seq OWNED BY public.rating_reply.id;


--
-- Name: token_blacklist_blacklistedtoken; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.token_blacklist_blacklistedtoken (
    id bigint NOT NULL,
    blacklisted_at timestamp with time zone NOT NULL,
    token_id bigint NOT NULL
);


ALTER TABLE public.token_blacklist_blacklistedtoken OWNER TO postgres;

--
-- Name: token_blacklist_blacklistedtoken_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.token_blacklist_blacklistedtoken_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.token_blacklist_blacklistedtoken_id_seq OWNER TO postgres;

--
-- Name: token_blacklist_blacklistedtoken_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.token_blacklist_blacklistedtoken_id_seq OWNED BY public.token_blacklist_blacklistedtoken.id;


--
-- Name: token_blacklist_outstandingtoken; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.token_blacklist_outstandingtoken (
    id bigint NOT NULL,
    token text NOT NULL,
    created_at timestamp with time zone,
    expires_at timestamp with time zone NOT NULL,
    user_id bigint,
    jti character varying(255) NOT NULL
);


ALTER TABLE public.token_blacklist_outstandingtoken OWNER TO postgres;

--
-- Name: token_blacklist_outstandingtoken_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.token_blacklist_outstandingtoken_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.token_blacklist_outstandingtoken_id_seq OWNER TO postgres;

--
-- Name: token_blacklist_outstandingtoken_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.token_blacklist_outstandingtoken_id_seq OWNED BY public.token_blacklist_outstandingtoken.id;


--
-- Name: voucher_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.voucher_type (
    id bigint NOT NULL,
    condition integer NOT NULL,
    type integer NOT NULL
);


ALTER TABLE public.voucher_type OWNER TO postgres;

--
-- Name: voucher_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.voucher_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.voucher_type_id_seq OWNER TO postgres;

--
-- Name: voucher_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.voucher_type_id_seq OWNED BY public.voucher_type.id;


--
-- Name: voucher_voucher; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.voucher_voucher (
    id bigint NOT NULL,
    code character varying(40) NOT NULL,
    qty integer,
    title character varying(100) NOT NULL,
    content character varying(100),
    from_price double precision,
    from_product integer,
    reduce_price double precision,
    reduce_persent double precision,
    end_date timestamp with time zone,
    type_id bigint NOT NULL,
    scope integer NOT NULL,
    subcontent character varying(100),
    is_delete boolean NOT NULL
);


ALTER TABLE public.voucher_voucher OWNER TO postgres;

--
-- Name: voucher_voucher_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.voucher_voucher_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.voucher_voucher_id_seq OWNER TO postgres;

--
-- Name: voucher_voucher_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.voucher_voucher_id_seq OWNED BY public.voucher_voucher.id;


--
-- Name: voucher_vouchercustomer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.voucher_vouchercustomer (
    id bigint NOT NULL,
    is_used boolean NOT NULL,
    customer_id bigint NOT NULL,
    voucher_id bigint NOT NULL
);


ALTER TABLE public.voucher_vouchercustomer OWNER TO postgres;

--
-- Name: voucher_vouchercustomer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.voucher_vouchercustomer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.voucher_vouchercustomer_id_seq OWNER TO postgres;

--
-- Name: voucher_vouchercustomer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.voucher_vouchercustomer_id_seq OWNED BY public.voucher_vouchercustomer.id;


--
-- Name: accounts_account id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_account ALTER COLUMN id SET DEFAULT nextval('public.accounts_account_id_seq'::regclass);


--
-- Name: accounts_agency id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_agency ALTER COLUMN id SET DEFAULT nextval('public.accounts_agency_id_seq'::regclass);


--
-- Name: accounts_customer id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_customer ALTER COLUMN id SET DEFAULT nextval('public.accounts_customer_id_seq'::regclass);


--
-- Name: accounts_customer_follow id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_customer_follow ALTER COLUMN id SET DEFAULT nextval('public.accounts_customer_follow_id_seq'::regclass);


--
-- Name: accounts_shipper id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_shipper ALTER COLUMN id SET DEFAULT nextval('public.accounts_shipper_id_seq'::regclass);


--
-- Name: accounts_users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_users ALTER COLUMN id SET DEFAULT nextval('public.accounts_users_id_seq'::regclass);


--
-- Name: accounts_visit id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_visit ALTER COLUMN id SET DEFAULT nextval('public.accounts_visit_id_seq'::regclass);


--
-- Name: address_address id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address_address ALTER COLUMN id SET DEFAULT nextval('public.address_address_id_seq'::regclass);


--
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- Name: orders_cancel id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_cancel ALTER COLUMN id SET DEFAULT nextval('public.orders_cancel_id_seq'::regclass);


--
-- Name: orders_order id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_order ALTER COLUMN id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);


--
-- Name: orders_orderdetail id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_orderdetail ALTER COLUMN id SET DEFAULT nextval('public.orders_orderdetail_id_seq'::regclass);


--
-- Name: orders_payment id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_payment ALTER COLUMN id SET DEFAULT nextval('public.orders_payment_id_seq'::regclass);


--
-- Name: orders_statusshippingnote id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_statusshippingnote ALTER COLUMN id SET DEFAULT nextval('public.orders_statusshippingnote_id_seq'::regclass);


--
-- Name: products_attachment id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_attachment ALTER COLUMN id SET DEFAULT nextval('public.products_attachment_id_seq'::regclass);


--
-- Name: products_brand id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_brand ALTER COLUMN id SET DEFAULT nextval('public.products_brand_id_seq'::regclass);


--
-- Name: products_category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_category ALTER COLUMN id SET DEFAULT nextval('public.products_category_id_seq'::regclass);


--
-- Name: products_describe id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_describe ALTER COLUMN id SET DEFAULT nextval('public.products_describe_id_seq'::regclass);


--
-- Name: products_detail id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_detail ALTER COLUMN id SET DEFAULT nextval('public.products_detail_id_seq'::regclass);


--
-- Name: products_price id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_price ALTER COLUMN id SET DEFAULT nextval('public.products_price_id_seq'::regclass);


--
-- Name: products_product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product ALTER COLUMN id SET DEFAULT nextval('public.products_product_id_seq'::regclass);


--
-- Name: products_product_agency id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_agency ALTER COLUMN id SET DEFAULT nextval('public.products_product_agency_id_seq'::regclass);


--
-- Name: products_product_category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_category ALTER COLUMN id SET DEFAULT nextval('public.products_product_category_id_seq'::regclass);


--
-- Name: products_product_customer_bought id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_customer_bought ALTER COLUMN id SET DEFAULT nextval('public.products_product_customer_bought_id_seq'::regclass);


--
-- Name: products_product_customer_favorite id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_customer_favorite ALTER COLUMN id SET DEFAULT nextval('public.products_product_customer_favorite_id_seq'::regclass);


--
-- Name: products_product_detail id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_detail ALTER COLUMN id SET DEFAULT nextval('public.products_product_detail_id_seq'::regclass);


--
-- Name: products_product_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_type ALTER COLUMN id SET DEFAULT nextval('public.products_product_type_id_seq'::regclass);


--
-- Name: products_quantity id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_quantity ALTER COLUMN id SET DEFAULT nextval('public.products_quantity_id_seq'::regclass);


--
-- Name: products_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_type ALTER COLUMN id SET DEFAULT nextval('public.products_type_id_seq'::regclass);


--
-- Name: rating_image id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rating_image ALTER COLUMN id SET DEFAULT nextval('public.rating_image_id_seq'::regclass);


--
-- Name: rating_rate id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rating_rate ALTER COLUMN id SET DEFAULT nextval('public.rating_rate_id_seq'::regclass);


--
-- Name: rating_reply id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rating_reply ALTER COLUMN id SET DEFAULT nextval('public.rating_reply_id_seq'::regclass);


--
-- Name: token_blacklist_blacklistedtoken id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.token_blacklist_blacklistedtoken ALTER COLUMN id SET DEFAULT nextval('public.token_blacklist_blacklistedtoken_id_seq'::regclass);


--
-- Name: token_blacklist_outstandingtoken id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.token_blacklist_outstandingtoken ALTER COLUMN id SET DEFAULT nextval('public.token_blacklist_outstandingtoken_id_seq'::regclass);


--
-- Name: voucher_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher_type ALTER COLUMN id SET DEFAULT nextval('public.voucher_type_id_seq'::regclass);


--
-- Name: voucher_voucher id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher_voucher ALTER COLUMN id SET DEFAULT nextval('public.voucher_voucher_id_seq'::regclass);


--
-- Name: voucher_vouchercustomer id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher_vouchercustomer ALTER COLUMN id SET DEFAULT nextval('public.voucher_vouchercustomer_id_seq'::regclass);


--
-- Data for Name: accounts_account; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.accounts_account (id, password, phone, date_joined, last_login, is_admin, is_staff, is_superuser, is_customer, is_agency, is_active, is_shipper) FROM stdin;
3	pbkdf2_sha256$320000$y5VCUsKv8Ax7q7njEsjXPa$joCr5enWwoNrrV/qiiyqQQKdkwS1wpvhDFwRIoD4ttw=	0817415963	2022-11-29 14:18:25.578518+00	2022-11-29 14:18:25.601989+00	f	f	f	t	f	t	f
17	pbkdf2_sha256$320000$vCscX7cEaJkI0VwoIRunxF$Xy2R/PuztQN400ikm7KTOBicMga+DOnT5tL3T4LvplE=	0948424274	2022-12-09 06:16:51.807805+00	2022-12-09 06:32:39.033963+00	f	f	f	f	t	t	f
18	pbkdf2_sha256$320000$AUS9XENU1CgUC0mgrjkw5u$OHM5TU37XSpq5elUx8v8CQYK1+L4fGSQc0y4qhB4D3A=	0948424277	2022-12-09 06:17:11.706239+00	2022-12-09 06:32:43.460421+00	f	f	f	f	t	t	f
6	pbkdf2_sha256$320000$oeMeJQXiQyp27ttxl2Xfhj$1pjMxaWF5+FwlOYtMEgGjE8XiKEPxR3QsfBXScP/fHw=	0706694448	2022-11-29 16:01:34.339463+00	2022-11-29 16:01:34.349356+00	f	f	f	t	f	t	f
11	pbkdf2_sha256$320000$dvQoN7dSazvwoWE8qJJa5u$x+eTcZmiYWDXGdXDe++T2nsCqSJ5fMWEZB28m2QsGQg=	0948424270	2022-12-09 06:15:49.221026+00	2022-12-09 06:32:47.0717+00	f	f	f	f	t	t	f
13	pbkdf2_sha256$320000$ZVy2NyvQL9ylPYGz0E91zd$PE+uV81k89OCXZA3gaNq5Bx50JroEDC7mg57Q4pnZiY=	0948424271	2022-12-09 06:16:03.191129+00	2022-12-09 06:32:51.389069+00	f	f	f	f	t	t	f
8	pbkdf2_sha256$320000$c0xqC2BMPaGQjbMBDJgAfE$WclXtt59+SHyB/RESVxp/XAtEToPnd0VlZWpAIlvJ3U=	0948424275	2022-12-03 06:27:15.779596+00	2022-12-03 08:01:58.854985+00	f	f	f	f	t	t	f
14	pbkdf2_sha256$320000$r2Z7oJmSkmzwN0Ae0uOjLL$jUQmzzq+Q7G2qc9cYrqUGH7k73fjgemzD8cLpP8+zdY=	0948424272	2022-12-09 06:16:17.764582+00	2022-12-09 06:32:55.187368+00	f	f	f	f	t	t	f
16	pbkdf2_sha256$320000$mGNr6uu2RRWcof3j0dzjlJ$NawxBnPfqi34+C7tZNqvNJvat6P0c0sUFK0PQBTJVyM=	0948424273	2022-12-09 06:16:35.264491+00	2022-12-09 06:32:58.938906+00	f	f	f	f	t	t	f
7	pbkdf2_sha256$320000$66PNJUZl2BBBCIf2MYO4PJ$zAQFZIyng193YT2mIc7paeqQZO9pxrRUI+aRFZ1y0lw=	0774133555	2022-12-03 04:04:32.033694+00	2022-12-03 09:05:11.441926+00	f	f	f	f	f	t	t
5	pbkdf2_sha256$320000$AsjBRktLaoCuV0r1FiDLGs$1obeW4Iev5NPYKaWiUlgFDxzxdVVWCxUZ1ILhuqL79c=	0367720983	2022-11-29 15:57:35.048364+00	2022-12-03 11:37:21.752348+00	f	f	f	f	t	t	f
1	pbkdf2_sha256$320000$v8XJy4L7oqdQpIL1biBgZZ$ngdYvyqZp0Q7C3lfOTKzg+xcT1kWUpWCQk9srXFzptQ=	0123456789	2022-11-28 15:36:02.066716+00	2022-12-04 02:10:43.374431+00	t	t	f	f	f	t	f
9	pbkdf2_sha256$320000$EYUL3CEkhupbg58fqIDK1k$01VwYZHHpqX8w5RmYqVUeC+yqE7RDKg3AM/oOaMEmV8=	0706694447	2022-12-04 04:18:14.421509+00	2022-12-04 04:18:14.477811+00	f	f	f	t	f	t	f
2	pbkdf2_sha256$320000$dCXZWYut8oJiS12OFdt4gc$cMHkkltV4ov7rJKG4SzA6sWK3SyG6rgkR3ToJYzUHNk=	0948424276	2022-11-28 15:40:12.955642+00	2022-12-04 11:35:12.043814+00	f	f	f	f	t	f	f
10	pbkdf2_sha256$320000$Xvrq04WD2rjTDOB99b9Ltk$zp356OH40i59mWo/O7V+RYtJhxvB7ha4P8oy4GW4Da4=	0706694446	2022-12-04 11:27:48.630557+00	2022-12-04 11:40:23.473581+00	f	f	f	f	t	t	f
\.


--
-- Data for Name: accounts_agency; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.accounts_agency (id, main_industry, identify, user_id) FROM stdin;
1	Bách Hóa	381902845	1
2	Bán giày	091200000020	3
10	Điện tử	381902840	14
9	Trà	381902841	13
8	Bách Hóa	381902842	12
7	Bách Hóa	381902843	11
5	Bách Hóa	381902846	9
6	Bách Hóa	381902844	10
4	Bán toy	091200000026	8
3	Bách Hóa	381902849	6
\.


--
-- Data for Name: accounts_customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.accounts_customer (id, nickname, birthday, user_id) FROM stdin;
1	Noan	2022-11-29	2
2	\N	2022-11-29	4
3	\N	2022-12-04	7
\.


--
-- Data for Name: accounts_customer_follow; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.accounts_customer_follow (id, customer_id, agency_id) FROM stdin;
\.


--
-- Data for Name: accounts_shipper; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.accounts_shipper (id, "companyName", user_id) FROM stdin;
1	NoanANoan	5
\.


--
-- Data for Name: accounts_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.accounts_users (id, name, email, avatar, nationality, account_id, gender) FROM stdin;
1	Nguyen	thaonguyen1@gmail.com	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s	Viet Nam	2	F
2	Nhan	nhan@example.com	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s	VN	3	M
4	Lê Ngọc Bội	\N	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s	\N	6	M
5	NhanMe	heninduty3@gmail.com	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s	Viet Nam	7	F
3	Lê Ngọc Bội	leng.boi247@gmail.com	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s	\N	5	M
6	Nguyen	thaonguyen21@gmail.com	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s	Viet Nam	8	F
7	Nguyễn Kim Nam	\N	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s	\N	9	M
8	Đổ Nam Trung	kenproboi@gmail.com	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s	\N	10	M
9	SHOP THẢO	thaothaong@gmail.com	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s	Viet Nam	11	F
10	SHOP THẢO NHUNG	thaothaong1@gmail.com	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s	Viet Nam	13	F
11	SHOP THẢO MAI	thaothaong2@gmail.com	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s	Viet Nam	14	F
12	SHOP TRÀ	thaothaong3@gmail.com	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s	Viet Nam	16	F
13	SHOP TRÀ XANH	thaothaong4@gmail.com	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s	Viet Nam	17	F
14	SHOP CÔNG NGHỆ XANH	thaothaong5@gmail.com	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_moVUzQH4Cwo38P39N0isb0ohtz6uB7lwDWDVhE&s	Viet Nam	18	F
\.


--
-- Data for Name: accounts_visit; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.accounts_visit (id, time_visited, number_product, lasted_visited, agency_id, customer_id) FROM stdin;
\.


--
-- Data for Name: address_address; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.address_address (id, province, district, ward, detail, type, user_id, is_approved, is_default, is_delete) FROM stdin;
1	Cần Thơ	Bình Thủy	Bùi hữu Nghĩa	Đường bùi hữu nghĩa gần nghĩa trang liệt sĩ	Home	4	t	t	f
2	Cần Thơ	Ninh Kiều	Số 10, An Bình		home	2	t	t	f
3	Cần thơ	Bình thủy	Long hòa	Bùi hữu nghĩa 222	Home	4	t	f	f
4	Cần Thơ	Ninh Kiều	Xuân Khánh	332 đường 3/2	Home	7	t	t	f
5	Cần Thơ	Ninh Kiều	Xuân Khánh	31/132 3/2	Home	4	t	f	f
\.


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can view log entry	1	view_logentry
5	Can add permission	2	add_permission
6	Can change permission	2	change_permission
7	Can delete permission	2	delete_permission
8	Can view permission	2	view_permission
9	Can add group	3	add_group
10	Can change group	3	change_group
11	Can delete group	3	delete_group
12	Can view group	3	view_group
13	Can add content type	4	add_contenttype
14	Can change content type	4	change_contenttype
15	Can delete content type	4	delete_contenttype
16	Can view content type	4	view_contenttype
17	Can add session	5	add_session
18	Can change session	5	change_session
19	Can delete session	5	delete_session
20	Can view session	5	view_session
21	Can add account	6	add_account
22	Can change account	6	change_account
23	Can delete account	6	delete_account
24	Can view account	6	view_account
25	Can add agency	7	add_agency
26	Can change agency	7	change_agency
27	Can delete agency	7	delete_agency
28	Can view agency	7	view_agency
29	Can add customer	8	add_customer
30	Can change customer	8	change_customer
31	Can delete customer	8	delete_customer
32	Can view customer	8	view_customer
33	Can add visit	9	add_visit
34	Can change visit	9	change_visit
35	Can delete visit	9	delete_visit
36	Can view visit	9	view_visit
37	Can add users	10	add_users
38	Can change users	10	change_users
39	Can delete users	10	delete_users
40	Can view users	10	view_users
41	Can add shipper	11	add_shipper
42	Can change shipper	11	change_shipper
43	Can delete shipper	11	delete_shipper
44	Can view shipper	11	view_shipper
45	Can add address	12	add_address
46	Can change address	12	change_address
47	Can delete address	12	delete_address
48	Can view address	12	view_address
49	Can add type	13	add_type
50	Can change type	13	change_type
51	Can delete type	13	delete_type
52	Can view type	13	view_type
53	Can add voucher	14	add_voucher
54	Can change voucher	14	change_voucher
55	Can delete voucher	14	delete_voucher
56	Can view voucher	14	view_voucher
57	Can add voucher customer	15	add_vouchercustomer
58	Can change voucher customer	15	change_vouchercustomer
59	Can delete voucher customer	15	delete_vouchercustomer
60	Can view voucher customer	15	view_vouchercustomer
61	Can add product	16	add_product
62	Can change product	16	change_product
63	Can delete product	16	delete_product
64	Can view product	16	view_product
65	Can add brand	17	add_brand
66	Can change brand	17	change_brand
67	Can delete brand	17	delete_brand
68	Can view brand	17	view_brand
69	Can add describe	18	add_describe
70	Can change describe	18	change_describe
71	Can delete describe	18	delete_describe
72	Can view describe	18	view_describe
73	Can add detail	19	add_detail
74	Can change detail	19	change_detail
75	Can delete detail	19	delete_detail
76	Can view detail	19	view_detail
77	Can add type	20	add_type
78	Can change type	20	change_type
79	Can delete type	20	delete_type
80	Can view type	20	view_type
81	Can add quantity	21	add_quantity
82	Can change quantity	21	change_quantity
83	Can delete quantity	21	delete_quantity
84	Can view quantity	21	view_quantity
85	Can add price	22	add_price
86	Can change price	22	change_price
87	Can delete price	22	delete_price
88	Can view price	22	view_price
89	Can add category	23	add_category
90	Can change category	23	change_category
91	Can delete category	23	delete_category
92	Can view category	23	view_category
93	Can add attachment	24	add_attachment
94	Can change attachment	24	change_attachment
95	Can delete attachment	24	delete_attachment
96	Can view attachment	24	view_attachment
97	Can add payment	25	add_payment
98	Can change payment	25	change_payment
99	Can delete payment	25	delete_payment
100	Can view payment	25	view_payment
101	Can add order detail	26	add_orderdetail
102	Can change order detail	26	change_orderdetail
103	Can delete order detail	26	delete_orderdetail
104	Can view order detail	26	view_orderdetail
105	Can add order	27	add_order
106	Can change order	27	change_order
107	Can delete order	27	delete_order
108	Can view order	27	view_order
109	Can add cancel	28	add_cancel
110	Can change cancel	28	change_cancel
111	Can delete cancel	28	delete_cancel
112	Can view cancel	28	view_cancel
113	Can add status shipping note	29	add_statusshippingnote
114	Can change status shipping note	29	change_statusshippingnote
115	Can delete status shipping note	29	delete_statusshippingnote
116	Can view status shipping note	29	view_statusshippingnote
117	Can add rate	30	add_rate
118	Can change rate	30	change_rate
119	Can delete rate	30	delete_rate
120	Can view rate	30	view_rate
121	Can add reply	31	add_reply
122	Can change reply	31	change_reply
123	Can delete reply	31	delete_reply
124	Can view reply	31	view_reply
125	Can add image	32	add_image
126	Can change image	32	change_image
127	Can delete image	32	delete_image
128	Can view image	32	view_image
129	Can add blacklisted token	33	add_blacklistedtoken
130	Can change blacklisted token	33	change_blacklistedtoken
131	Can delete blacklisted token	33	delete_blacklistedtoken
132	Can view blacklisted token	33	view_blacklistedtoken
133	Can add outstanding token	34	add_outstandingtoken
134	Can change outstanding token	34	change_outstandingtoken
135	Can delete outstanding token	34	delete_outstandingtoken
136	Can view outstanding token	34	view_outstandingtoken
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2022-11-29 15:54:05.806895+00	1	Đồ điện tử	1	[{"added": {}}]	20	1
2	2022-11-29 15:54:12.569557+00	2	gaming	1	[{"added": {}}]	20	1
3	2022-11-29 15:54:21.435277+00	3	Cho nam	1	[{"added": {}}]	20	1
4	2022-11-29 15:54:28.571545+00	4	Cho nữ	1	[{"added": {}}]	20	1
5	2022-11-29 15:54:37.21603+00	5	Cho trẻ em	1	[{"added": {}}]	20	1
6	2022-11-29 15:54:45.159653+00	6	Máy tính và laptop	1	[{"added": {}}]	20	1
7	2022-11-29 15:54:58.857897+00	7	Máy ảnh và quay phim	1	[{"added": {}}]	20	1
8	2022-11-29 15:55:06.136253+00	8	Đồng hồ	1	[{"added": {}}]	20	1
9	2022-11-29 15:55:12.882062+00	9	Gia dụng	1	[{"added": {}}]	20	1
10	2022-11-29 15:55:20.21957+00	10	Ô tô xe máy xe đạp	1	[{"added": {}}]	20	1
11	2022-11-29 15:55:29.816534+00	11	Thể thao	1	[{"added": {}}]	20	1
12	2022-11-29 15:55:37.660827+00	12	Mẹ và bé	1	[{"added": {}}]	20	1
13	2022-11-29 15:55:44.549717+00	13	Sắc đẹp	1	[{"added": {}}]	20	1
14	2022-11-29 15:55:51.565087+00	14	Sức khỏe	1	[{"added": {}}]	20	1
15	2022-11-29 15:55:58.403128+00	15	Dày dép nữ	1	[{"added": {}}]	20	1
16	2022-11-29 15:56:04.252146+00	16	Túi ví nữ	1	[{"added": {}}]	20	1
17	2022-11-29 15:56:10.980308+00	17	Bách hóa	1	[{"added": {}}]	20	1
18	2022-11-29 15:56:16.100654+00	18	Sách	1	[{"added": {}}]	20	1
19	2022-11-29 15:56:24.227034+00	19	Thời trang trẻ em	1	[{"added": {}}]	20	1
20	2022-11-29 15:56:36.062789+00	20	Đồ chơi	1	[{"added": {}}]	20	1
21	2022-11-29 15:56:42.70039+00	21	Thú cưng	1	[{"added": {}}]	20	1
22	2022-11-29 15:56:48.784003+00	22	Dịch vụ vocher	1	[{"added": {}}]	20	1
23	2022-11-29 15:58:11.284365+00	5	0367720983	2	[{"changed": {"fields": ["Is active"]}}]	6	1
24	2022-11-29 16:00:13.765585+00	1	Nike MN	2	[]	16	1
25	2022-11-29 16:00:20.206562+00	1	Nike MN	2	[{"changed": {"fields": ["Is approved"]}}]	16	1
26	2022-11-29 16:02:38.893266+00	1	Payment object (1)	1	[{"added": {}}]	25	1
27	2022-11-29 16:02:43.831199+00	1	Payment object (1)	2	[]	25	1
28	2022-11-29 22:29:37.847089+00	2	Adidas MC1	2	[{"changed": {"fields": ["Is approved"]}}]	16	1
29	2022-12-03 05:17:33.670546+00	3	Lê Ngọc Bội	2	[{"changed": {"fields": ["Email"]}}]	10	1
30	2022-12-04 02:11:09.039018+00	5	OrderDetail object (5)	2	[{"changed": {"fields": ["Status"]}}]	26	1
31	2022-12-04 02:11:25.847455+00	3	OrderDetail object (3)	2	[{"changed": {"fields": ["Status"]}}]	26	1
32	2022-12-04 02:11:31.43065+00	2	OrderDetail object (2)	2	[{"changed": {"fields": ["Status"]}}]	26	1
33	2022-12-04 03:06:59.862906+00	2	OrderDetail object (2)	2	[{"changed": {"fields": ["Status"]}}]	26	1
34	2022-12-04 14:39:28.644974+00	4	OrderDetail object (4)	3		26	1
35	2022-12-06 22:16:13.540685+00	5	Nike 1ma	3		16	1
36	2022-12-06 22:23:11.657277+00	1	Nike MN	3		16	1
37	2022-12-07 22:59:01.933731+00	6	NIke	2	[{"changed": {"fields": ["Category", "Type", "Agency"]}}]	16	1
38	2022-12-08 01:26:05.265095+00	6	NIke	3		16	1
39	2022-12-08 07:45:27.72813+00	7	Lăn nách 4	3		16	1
40	2022-12-08 07:45:27.747222+00	4	Lăn nách 4	3		16	1
41	2022-12-08 07:45:27.754344+00	3	Lăn nách 3	3		16	1
42	2022-12-08 07:50:18.140018+00	9	ád	3		16	1
43	2022-12-08 07:50:18.158419+00	8	ád	3		16	1
44	2022-12-08 08:01:55.378722+00	2	Adidas MC1	2	[{"changed": {"fields": ["Is delete"]}}]	16	1
45	2022-12-08 09:48:31.057336+00	2	Adidas MC1	2	[{"changed": {"fields": ["Category", "Type", "Agency"]}}]	16	1
46	2022-12-08 09:50:03.650556+00	2	Adidas MC1	3		16	1
47	2022-12-09 06:14:42.10692+00	12	dsfsdfsfs	3		16	1
48	2022-12-09 06:14:42.130339+00	11	sdasdad	3		16	1
49	2022-12-09 06:14:42.133575+00	10	Chuột LichTech 250px	3		16	1
50	2022-12-09 06:27:23.174244+00	19	OrderDetail object (19)	3		26	1
51	2022-12-09 06:27:23.18553+00	18	OrderDetail object (18)	3		26	1
52	2022-12-09 06:27:23.190134+00	17	OrderDetail object (17)	3		26	1
53	2022-12-09 06:27:23.193343+00	16	OrderDetail object (16)	3		26	1
54	2022-12-09 06:27:23.196897+00	15	OrderDetail object (15)	3		26	1
55	2022-12-09 06:27:23.199815+00	14	OrderDetail object (14)	3		26	1
56	2022-12-09 06:27:23.202803+00	13	OrderDetail object (13)	3		26	1
57	2022-12-09 06:27:23.206273+00	12	OrderDetail object (12)	3		26	1
58	2022-12-09 06:27:23.209496+00	11	OrderDetail object (11)	3		26	1
59	2022-12-09 06:27:23.212267+00	10	OrderDetail object (10)	3		26	1
60	2022-12-09 06:27:23.215242+00	9	OrderDetail object (9)	3		26	1
61	2022-12-09 06:27:23.219258+00	8	OrderDetail object (8)	3		26	1
62	2022-12-09 06:27:23.223012+00	7	OrderDetail object (7)	3		26	1
63	2022-12-09 06:27:23.226108+00	6	OrderDetail object (6)	3		26	1
64	2022-12-09 06:27:23.22896+00	5	OrderDetail object (5)	3		26	1
65	2022-12-09 06:27:23.231773+00	3	OrderDetail object (3)	3		26	1
66	2022-12-09 06:27:23.234573+00	2	OrderDetail object (2)	3		26	1
67	2022-12-09 06:27:23.238499+00	1	OrderDetail object (1)	3		26	1
68	2022-12-09 06:27:55.841049+00	15	Describe object (15)	3		18	1
69	2022-12-09 06:27:55.847472+00	14	Describe object (14)	3		18	1
70	2022-12-09 06:27:55.852054+00	12	Describe object (12)	3		18	1
71	2022-12-09 06:27:55.855818+00	10	Describe object (10)	3		18	1
72	2022-12-09 06:27:55.859195+00	9	Describe object (9)	3		18	1
73	2022-12-09 06:27:55.861942+00	7	Describe object (7)	3		18	1
74	2022-12-09 06:27:55.865238+00	6	Describe object (6)	3		18	1
75	2022-12-09 06:27:55.870009+00	3	Describe object (3)	3		18	1
76	2022-12-09 06:27:55.873798+00	2	Describe object (2)	3		18	1
77	2022-12-09 06:27:55.877176+00	1	Describe object (1)	3		18	1
78	2022-12-09 06:28:11.449035+00	7	Rộng 30cm	3		19	1
79	2022-12-09 06:28:11.462019+00	6	Dài 20cm	3		19	1
80	2022-12-09 06:28:11.466489+00	5	Giày chạy bộ Nhẹ nhàng, giá cả phải chăng	3		19	1
81	2022-12-09 06:28:11.470363+00	4	Rộng 30cm	3		19	1
82	2022-12-09 06:28:11.474052+00	3	Dài 20cm	3		19	1
83	2022-12-09 06:28:11.476976+00	2	Rộng 30cm	3		19	1
84	2022-12-09 06:28:11.479853+00	1	Dài 20cm	3		19	1
85	2022-12-09 07:08:25.308729+00	10	SHOP CÔNG NGHỆ XANH	2	[{"changed": {"fields": ["Identify"]}}]	7	1
86	2022-12-09 07:08:29.8299+00	9	SHOP TRÀ XANH	2	[{"changed": {"fields": ["Identify"]}}]	7	1
87	2022-12-09 07:08:34.449614+00	8	SHOP TRÀ	2	[{"changed": {"fields": ["Identify"]}}]	7	1
88	2022-12-09 07:08:38.762595+00	7	SHOP THẢO MAI	2	[{"changed": {"fields": ["Identify"]}}]	7	1
89	2022-12-09 07:08:43.268203+00	6	SHOP THẢO NHUNG	2	[{"changed": {"fields": ["Identify"]}}]	7	1
90	2022-12-09 07:08:46.557117+00	6	SHOP THẢO NHUNG	2	[]	7	1
91	2022-12-09 07:08:50.571227+00	5	SHOP THẢO	2	[{"changed": {"fields": ["Identify"]}}]	7	1
92	2022-12-09 07:08:54.442381+00	6	SHOP THẢO NHUNG	2	[]	7	1
93	2022-12-09 07:09:07.511401+00	4	Đổ Nam Trung	2	[{"changed": {"fields": ["Identify"]}}]	7	1
94	2022-12-09 07:13:01.398069+00	3	Nguyen	2	[{"changed": {"fields": ["Identify"]}}]	7	1
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	contenttypes	contenttype
5	sessions	session
6	accounts	account
7	accounts	agency
8	accounts	customer
9	accounts	visit
10	accounts	users
11	accounts	shipper
12	address	address
13	voucher	type
14	voucher	voucher
15	voucher	vouchercustomer
16	products	product
17	products	brand
18	products	describe
19	products	detail
20	products	type
21	products	quantity
22	products	price
23	products	category
24	products	attachment
25	orders	payment
26	orders	orderdetail
27	orders	order
28	orders	cancel
29	orders	statusshippingnote
30	rating	rate
31	rating	reply
32	rating	image
33	token_blacklist	blacklistedtoken
34	token_blacklist	outstandingtoken
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	accounts	0001_initial	2022-11-28 15:35:18.204132+00
2	accounts	0002_users_gender	2022-11-28 15:35:18.231728+00
3	accounts	0003_alter_customer_birthday	2022-11-28 15:35:18.265785+00
4	accounts	0004_alter_users_avatar	2022-11-28 15:35:18.287951+00
5	accounts	0005_alter_users_avatar	2022-11-28 15:35:18.307659+00
6	accounts	0006_alter_users_avatar	2022-11-28 15:35:18.327855+00
7	accounts	0007_remove_users_time_visited	2022-11-28 15:35:18.361696+00
8	accounts	0008_alter_visit_unique_together	2022-11-28 15:35:18.476547+00
9	accounts	0009_account_is_shipper_shipper	2022-11-28 15:35:18.528991+00
10	accounts	0010_alter_account_is_shipper	2022-11-28 15:35:18.540748+00
11	address	0001_initial	2022-11-28 15:35:18.591153+00
12	address	0002_address_is_approved	2022-11-28 15:35:18.619957+00
13	address	0003_address_is_default	2022-11-28 15:35:18.650251+00
14	address	0004_address_is_delete	2022-11-28 15:35:18.681973+00
15	contenttypes	0001_initial	2022-11-28 15:35:18.714641+00
16	admin	0001_initial	2022-11-28 15:35:18.778502+00
17	admin	0002_logentry_remove_auto_add	2022-11-28 15:35:18.792142+00
18	admin	0003_logentry_add_action_flag_choices	2022-11-28 15:35:18.802145+00
19	contenttypes	0002_remove_content_type_name	2022-11-28 15:35:18.826666+00
20	auth	0001_initial	2022-11-28 15:35:19.033029+00
21	auth	0002_alter_permission_name_max_length	2022-11-28 15:35:19.075772+00
22	auth	0003_alter_user_email_max_length	2022-11-28 15:35:19.105308+00
23	auth	0004_alter_user_username_opts	2022-11-28 15:35:19.120369+00
24	auth	0005_alter_user_last_login_null	2022-11-28 15:35:19.159408+00
25	auth	0006_require_contenttypes_0002	2022-11-28 15:35:19.163805+00
26	auth	0007_alter_validators_add_error_messages	2022-11-28 15:35:19.181106+00
27	auth	0008_alter_user_username_max_length	2022-11-28 15:35:19.199818+00
28	auth	0009_alter_user_last_name_max_length	2022-11-28 15:35:19.220842+00
29	auth	0010_alter_group_name_max_length	2022-11-28 15:35:19.255303+00
30	auth	0011_update_proxy_permissions	2022-11-28 15:35:19.296071+00
31	auth	0012_alter_user_first_name_max_length	2022-11-28 15:35:19.316945+00
32	products	0001_initial	2022-11-28 15:35:19.336127+00
33	products	0002_brand_describe_detail_type_product_agency_and_more	2022-11-28 15:35:20.228257+00
34	products	0003_alter_image_product	2022-11-28 15:35:20.347141+00
35	orders	0001_initial	2022-11-28 15:35:20.488751+00
36	orders	0002_alter_order_detail	2022-11-28 15:35:20.610222+00
37	orders	0003_rename_detail_order_order_detail	2022-11-28 15:35:20.692828+00
38	orders	0004_alter_orderdetail_address_alter_orderdetail_payment_and_more	2022-11-28 15:35:20.81484+00
39	orders	0005_cancel_alter_orderdetail_status	2022-11-28 15:35:20.845901+00
40	orders	0006_alter_orderdetail_status	2022-11-28 15:35:20.872666+00
41	orders	0007_orderdetail_shipper	2022-11-28 15:35:21.054941+00
42	orders	0008_statusshippingnote	2022-11-28 15:35:21.143125+00
43	orders	0009_statusshippingnote_date_note	2022-11-28 15:35:21.22466+00
44	orders	0010_statusshippingnote_shipper	2022-11-28 15:35:21.463567+00
45	orders	0011_orderdetail_customer	2022-11-28 15:35:21.574034+00
46	orders	0012_alter_orderdetail_address	2022-11-28 15:35:21.628766+00
47	orders	0013_alter_statusshippingnote_substatus	2022-11-28 15:35:21.649452+00
48	orders	0014_orderdetail_agency	2022-11-28 15:35:21.707755+00
49	products	0004_attachment_delete_image	2022-11-28 15:35:21.773913+00
50	products	0005_alter_attachment_type	2022-11-28 15:35:21.819299+00
51	products	0006_alter_brand_origin_alter_brand_origin_brand_and_more	2022-11-28 15:35:21.956811+00
52	products	0007_alter_brand_unique_together	2022-11-28 15:35:21.988267+00
53	products	0008_alter_brand_origin_alter_brand_origin_brand	2022-11-28 15:35:22.048999+00
54	products	0009_brand_name_alter_type_name	2022-11-28 15:35:22.134424+00
55	products	0010_alter_product_category_alter_product_detail	2022-11-28 15:35:22.268123+00
56	products	0011_alter_product_brand	2022-11-28 15:35:22.373345+00
57	products	0012_alter_category_name	2022-11-28 15:35:22.474605+00
58	products	0013_alter_category_name_alter_category_unique_together	2022-11-28 15:35:22.631376+00
59	products	0014_alter_brand_unique_together	2022-11-28 15:35:22.669387+00
60	products	0015_alter_attachment_product	2022-11-28 15:35:22.711823+00
61	products	0016_alter_quantity_quantity	2022-11-28 15:35:22.744416+00
62	products	0017_alter_product_display_image	2022-11-28 15:35:22.778938+00
63	products	0018_quantity_change_num	2022-11-28 15:35:22.826203+00
64	products	0019_quantity_customer	2022-11-28 15:35:23.056536+00
65	products	0020_alter_attachment_url	2022-11-28 15:35:23.088432+00
66	products	0021_quantity_price_once_quantity_types	2022-11-28 15:35:23.137929+00
67	rating	0001_initial	2022-11-28 15:35:23.301147+00
68	rating	0002_image	2022-11-28 15:35:23.396452+00
69	rating	0003_rate_is_approved	2022-11-28 15:35:23.456522+00
70	rating	0004_reply_is_approved	2022-11-28 15:35:23.51983+00
71	sessions	0001_initial	2022-11-28 15:35:23.566601+00
72	token_blacklist	0001_initial	2022-11-28 15:35:23.938696+00
73	token_blacklist	0002_outstandingtoken_jti_hex	2022-11-28 15:35:23.955658+00
74	token_blacklist	0003_auto_20171017_2007	2022-11-28 15:35:24.010594+00
75	token_blacklist	0004_auto_20171017_2013	2022-11-28 15:35:24.034186+00
76	token_blacklist	0005_remove_outstandingtoken_jti	2022-11-28 15:35:24.051763+00
77	token_blacklist	0006_auto_20171017_2113	2022-11-28 15:35:24.067088+00
78	token_blacklist	0007_auto_20171017_2214	2022-11-28 15:35:24.133563+00
79	token_blacklist	0008_migrate_to_bigautofield	2022-11-28 15:35:24.2551+00
80	token_blacklist	0010_fix_migrate_to_bigautofield	2022-11-28 15:35:24.308984+00
81	token_blacklist	0011_linearizes_history	2022-11-28 15:35:24.313808+00
82	token_blacklist	0012_alter_outstandingtoken_user	2022-11-28 15:35:24.355262+00
83	voucher	0001_initial	2022-11-28 15:35:24.475278+00
84	voucher	0002_voucher_type	2022-11-28 15:35:24.537071+00
85	voucher	0003_voucher_order_detail	2022-11-28 15:35:24.798854+00
86	voucher	0004_alter_type_condition_alter_type_type	2022-11-28 15:35:24.820004+00
87	voucher	0005_alter_type_condition_alter_type_type	2022-11-28 15:35:24.842755+00
88	voucher	0006_alter_type_condition_alter_type_type	2022-11-28 15:35:24.872097+00
89	voucher	0007_alter_voucher_end_date_alter_voucher_qty	2022-11-28 15:35:25.067964+00
90	voucher	0008_voucher_scope	2022-11-28 15:35:25.12037+00
91	voucher	0009_alter_type_condition_alter_type_type_and_more	2022-11-28 15:35:25.170448+00
92	voucher	0010_alter_voucher_customer	2022-11-28 15:35:25.217809+00
93	voucher	0011_voucher_subcontent	2022-11-28 15:35:25.250297+00
94	voucher	0012_remove_voucher_order_detail_voucher_order_detail	2022-11-28 15:35:25.369633+00
95	voucher	0013_remove_voucher_order_detail	2022-11-28 15:35:25.46577+00
96	voucher	0014_alter_voucher_code	2022-11-28 15:35:25.531266+00
97	voucher	0015_voucher_is_delete	2022-11-28 15:35:25.596477+00
98	orders	0015_statusshippingnote_image_and_more	2022-12-04 02:04:15.3404+00
99	accounts	0011_alter_agency_identify	2022-12-09 07:13:09.637913+00
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
7b3fuh96yawgmxqitw0pip7cemta6vt9	.eJxVjMsOwiAURP-FtSGAPIpL9_0Gcu8FpGogKe3K-O9K0oUuZ86ZebEA-1bC3tMalsguTLLTb4dAj1QHiHeot8ap1W1dkA-FH7TzucX0vB7u30GBXsbaG-EM2KwEkidnDThFfhJegp0yaJmExqwwWpHIZX12aDKQh2800rP3B-GCODQ:1p1eSp:WsaRajXADLKvgv3qCx8Z_JrS3Vwr5wMgvAYVhFG05iE	2022-12-18 02:10:43.381097+00
\.


--
-- Data for Name: orders_cancel; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders_cancel (id, reason, detail) FROM stdin;
\.


--
-- Data for Name: orders_order; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders_order (id, qty, amount, customer_id, order_detail_id, product_id) FROM stdin;
47	2	112000	2	20	18
\.


--
-- Data for Name: orders_orderdetail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders_orderdetail (id, total, date_order, date_receive, status, address_id, payment_id, shipper_id, customer_id, agency_id) FROM stdin;
20	112000	2022-12-09 07:39:40.030212+00	\N	Waiting for confirm	1	1	\N	2	9
\.


--
-- Data for Name: orders_payment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders_payment (id, name) FROM stdin;
1	Trả khi nhận hàng
\.


--
-- Data for Name: orders_statusshippingnote; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders_statusshippingnote (id, substatus, note, order_detail_id, date_note, shipper_id, image) FROM stdin;
\.


--
-- Data for Name: products_attachment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_attachment (id, url, type, product_id) FROM stdin;
37	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670569459/angular_bnshop/emrcbmazd4qvkws1gzkh.webp	2D	13
38	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670569459/angular_bnshop/nzjfkcekkjlftsbj6a8a.webp	2D	13
39	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670569459/angular_bnshop/n8wlmu8xx5cwxo3gptyj.webp	2D	13
40	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670569496/angular_bnshop/pmjx5rppfds1aewiof49.jpg	2D	13
41	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670569496/angular_bnshop/mi6pmrjtwlkemq3vpl8g.jpg	2D	13
42	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670569496/angular_bnshop/p1zlbbmqe9v5belv84v9.jpg	2D	13
43	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670569567/angular_bnshop/nohvzx123nglkfqsjssu.jpg	2D	14
44	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670569567/angular_bnshop/fbvbghqudes8balyd48g.jpg	2D	14
45	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670570416/angular_bnshop/id1n2zsiabyvi94xskjh.jpg	2D	15
46	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670570416/angular_bnshop/mdasivwapsk3pqtwysub.jpg	2D	15
47	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670570416/angular_bnshop/hbh615qufqoxgxicgzzx.jpg	2D	15
48	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670570481/angular_bnshop/dslgiwszgcv5k8pktpzq.jpg	2D	16
49	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670570482/angular_bnshop/zo3gf8knslwrbnz6eymr.jpg	2D	16
50	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670570482/angular_bnshop/pxgoyukx27x1orwzcr6o.jpg	2D	16
51	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670570966/angular_bnshop/tz3d4sbuwpfgvfubjhba.jpg	2D	17
52	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670570966/angular_bnshop/ylahigzph1av9nyzcxdy.jpg	2D	17
53	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670571355/angular_bnshop/vat7qxt8h9xmoro5wi5g.png	2D	18
54	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670571355/angular_bnshop/bk1vp5hbslb2jpon3zbh.jpg	2D	18
55	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670571623/angular_bnshop/ab8yx3ma56f3sddqpfaj.jpg	2D	19
56	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670571623/angular_bnshop/kc1bvcfrifk008qd5csu.jpg	2D	19
57	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670571623/angular_bnshop/ymuatgsqoceal3t4zjx1.jpg	2D	19
58	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670571779/angular_bnshop/x2lau516sadv8cbydqjb.jpg	2D	20
59	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670571779/angular_bnshop/ulp6ub3umnl2v6ul8eou.jpg	2D	20
60	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670571939/angular_bnshop/lgxd7q5p4abmq7d1awma.jpg	2D	21
61	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670571939/angular_bnshop/jpt1x5sozvyfbvu9yqjo.jpg	2D	21
62	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670571940/angular_bnshop/pttksju2ckfsvmewwmjm.jpg	2D	21
\.


--
-- Data for Name: products_brand; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_brand (id, origin, origin_brand, name) FROM stdin;
1	Mỹ	Việt Nam	Nike
2	Mỹ	Trung Quốc	Adidas
3	VN	VN	No Name
4	Mỹ	Mỹ	Nike
5	ád	ad	ads
6	ád	ád	ád
7	Việt Nam	Việt Nam	NomNom
8	adad	áda	ádasd
9	đâs	ádas	áda
10	Việt Nam	Việt Nam	OEM
11	Việt Nam	Việt Nam	CQBT
12	Brazil	Brazil	TongTongBraz
13	Việt Nam	Việt Nam	SRME
14	Việt Nam	Việt Nam	TTMCLOA
15	Việt Nam	Việt Nam	TDB
16	Mỹ	Mỹ	Dell
17	Trung Quốc	Trung Quốc	Xiaomi
\.


--
-- Data for Name: products_category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_category (id, name, agency_id) FROM stdin;
1	Addidas	2
2	Nike	2
3	Vans	2
4	Scorpion	3
5	LichTech	3
6	Chổi nhỏ	6
7	Chổi vừa	6
8	Chổi lớn	6
9	Chổi hỗn hợp	6
10	Dép tông	7
11	Dép lào	7
12	Dép quai hậu	7
13	Trà thảo mộc	9
14	Trà tươi	9
15	Trà sấy khô	9
16	Laptop	10
17	Điện thoại	10
18	Linh kiện máy tính	10
19	Phụ kiện máy tính	10
\.


--
-- Data for Name: products_describe; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_describe (id, content) FROM stdin;
\.


--
-- Data for Name: products_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_detail (id, title, content) FROM stdin;
\.


--
-- Data for Name: products_price; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_price (id, price, from_datetime, end_datetime, product_id) FROM stdin;
27	40000	2022-12-09 07:04:57.964159+00	\N	13
28	20000	2022-12-09 07:06:35.974891+00	\N	14
29	400000	2022-12-09 07:20:19.342946+00	\N	15
30	600000	2022-12-09 07:21:29.702473+00	\N	16
31	50000	2022-12-09 07:29:35.09997+00	\N	17
32	56000	2022-12-09 07:35:58.12109+00	\N	18
33	15600000	2022-12-09 07:40:24.881654+00	\N	19
34	5000000	2022-12-09 07:43:01.55933+00	\N	20
35	950000	2022-12-09 07:45:42.055556+00	\N	21
\.


--
-- Data for Name: products_product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_product (id, name, display_image, is_approved, is_delete, brand_id, describe_id) FROM stdin;
17	Trà Thảo Mộc Các Loại (Mỗi gói 100g)	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670570966/angular_bnshop/tz3d4sbuwpfgvfubjhba.jpg	t	f	14	\N
18	Trà đậu biếc (Mỗi gói 100g)	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670571355/angular_bnshop/vat7qxt8h9xmoro5wi5g.png	t	f	15	\N
19	Laptop Dell Inspirion 15 3000 I3511 5101BLK	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670571623/angular_bnshop/ab8yx3ma56f3sddqpfaj.jpg	t	f	16	\N
20	Tai nghe Redmi Buds 4 Pro	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670571779/angular_bnshop/x2lau516sadv8cbydqjb.jpg	t	f	17	\N
13	Chổi quét nhà nhỏ	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670569459/angular_bnshop/emrcbmazd4qvkws1gzkh.webp	t	f	10	\N
14	Chổi quét bàn thờ	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670569567/angular_bnshop/nohvzx123nglkfqsjssu.jpg	t	f	11	\N
21	Tai nghe Bluetooth True Wireless Redmi Airdots 3	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670571939/angular_bnshop/lgxd7q5p4abmq7d1awma.jpg	t	f	17	\N
15	Slim Flip Flops	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670570416/angular_bnshop/id1n2zsiabyvi94xskjh.jpg	t	f	12	\N
16	Dép quai hậu SRME	http://res.cloudinary.com/dvfnndkgl/image/upload/v1670570481/angular_bnshop/dslgiwszgcv5k8pktpzq.jpg	t	f	13	\N
\.


--
-- Data for Name: products_product_agency; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_product_agency (id, product_id, agency_id) FROM stdin;
15	13	6
16	14	6
17	15	7
18	16	7
19	17	9
20	18	9
21	19	10
22	20	10
23	21	10
\.


--
-- Data for Name: products_product_category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_product_category (id, product_id, category_id) FROM stdin;
22	13	6
23	14	6
24	14	9
25	15	11
26	16	12
27	17	15
28	17	13
29	18	13
30	18	15
31	19	16
32	20	19
33	21	19
\.


--
-- Data for Name: products_product_customer_bought; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_product_customer_bought (id, product_id, customer_id) FROM stdin;
9	18	2
\.


--
-- Data for Name: products_product_customer_favorite; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_product_customer_favorite (id, product_id, customer_id) FROM stdin;
\.


--
-- Data for Name: products_product_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_product_detail (id, product_id, detail_id) FROM stdin;
\.


--
-- Data for Name: products_product_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_product_type (id, product_id, type_id) FROM stdin;
27	13	9
28	14	9
29	15	17
30	16	9
31	16	4
32	17	23
33	18	23
34	19	1
35	19	6
36	20	1
37	21	1
\.


--
-- Data for Name: products_quantity; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_quantity (id, quantity, note, from_date, product_id, change_num, customer_id, price_once, types) FROM stdin;
35	20	Init	2022-12-09 07:04:57.955048+00	13	20	\N	40000	1
36	30	Init	2022-12-09 07:06:35.968893+00	14	30	\N	20000	1
37	20	Init	2022-12-09 07:20:19.333002+00	15	20	\N	400000	1
38	30	Init	2022-12-09 07:21:29.696598+00	16	30	\N	600000	1
39	60	Init	2022-12-09 07:29:35.088288+00	17	60	\N	50000	1
40	50	Init	2022-12-09 07:35:58.112858+00	18	50	\N	56000	1
41	48	User buy items	2022-12-09 07:39:40.059383+00	18	2	2	56000	3
42	10	Init	2022-12-09 07:40:24.876813+00	19	10	\N	15600000	1
43	10	Init	2022-12-09 07:43:01.550514+00	20	10	\N	5000000	1
44	10	Init	2022-12-09 07:45:42.049413+00	21	10	\N	950000	1
\.


--
-- Data for Name: products_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products_type (id, name) FROM stdin;
1	Đồ điện tử
2	gaming
3	Cho nam
4	Cho nữ
5	Cho trẻ em
6	Máy tính và laptop
7	Máy ảnh và quay phim
8	Đồng hồ
9	Gia dụng
10	Ô tô xe máy xe đạp
11	Thể thao
12	Mẹ và bé
13	Sắc đẹp
14	Sức khỏe
15	Dày dép nữ
16	Túi ví nữ
17	Bách hóa
18	Sách
19	Thời trang trẻ em
20	Đồ chơi
21	Thú cưng
22	Dịch vụ vocher
23	Đồ uống
\.


--
-- Data for Name: rating_image; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rating_image (id, image_url, type, rate_id) FROM stdin;
\.


--
-- Data for Name: rating_rate; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rating_rate (id, title, content, star, date_created, customer_id, product_id, is_approved) FROM stdin;
\.


--
-- Data for Name: rating_reply; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rating_reply (id, content, date_created, rate_id, user_id, is_approved) FROM stdin;
\.


--
-- Data for Name: token_blacklist_blacklistedtoken; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.token_blacklist_blacklistedtoken (id, blacklisted_at, token_id) FROM stdin;
\.


--
-- Data for Name: token_blacklist_outstandingtoken; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.token_blacklist_outstandingtoken (id, token, created_at, expires_at, user_id, jti) FROM stdin;
1	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTczNjQxMywiaWF0IjoxNjY5NjUwMDEzLCJqdGkiOiI1ZmIzNzM3ODY5ODI0ODk2YTM3Y2M5MGY3Y2Q4ZTk1OCIsInVzZXJfaWQiOjJ9._fsA8cJXpSNp-Q-PVzNeX4kVV4v4AYHkRaX2po4O0CU	2022-11-28 15:40:13.156782+00	2022-11-29 15:40:13+00	2	5fb3737869824896a37cc90f7cd8e958
2	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTgxNzkwNSwiaWF0IjoxNjY5NzMxNTA1LCJqdGkiOiI2YThlNjA0NjdiZTA0YzdhOWE0NWY2YmZiNTk5ODQ0ZiIsInVzZXJfaWQiOjN9.DdL5eo6EEdIobTTCiqGqk7iA6KwI4d7RAhY17OggIrU	2022-11-29 14:18:25.660055+00	2022-11-30 14:18:25+00	3	6a8e60467be04c7a9a45f6bfb599844f
3	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTgyMzg1NSwiaWF0IjoxNjY5NzM3NDU1LCJqdGkiOiIxYWU1OWE3NjYxOWU0OWFlYTQyNzBiMDFkZmZhZmIwMiIsInVzZXJfaWQiOjV9.WavdhReuWfbGlujmPHHQF9Up7wwwpoIKtnnHyIUQSHU	2022-11-29 15:57:35.155823+00	2022-11-30 15:57:35+00	5	1ae59a76619e49aea4270b01dffafb02
4	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTgyMzg5NSwiaWF0IjoxNjY5NzM3NDk1LCJqdGkiOiI0YzhjYThmNDg2MDM0MjZhYjUyNjlkZTE0ODZlOTZhNiIsInVzZXJfaWQiOjV9.AIwCCpESTN2nvtxCmAjoLJbDLWm6wRB4rUUenIliuz4	2022-11-29 15:58:15.437875+00	2022-11-30 15:58:15+00	5	4c8ca8f48603426ab5269de1486e96a6
5	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTgyMzg5NSwiaWF0IjoxNjY5NzM3NDk1LCJqdGkiOiIxYjE3YTVmYTAxOTE0YzljYTEzODc0ZjViZTk3OGVhMiIsInVzZXJfaWQiOjV9.aEYhir2x04y96ZSVpXOPwDxHaicTt2QOn9yhu_XUXmk	2022-11-29 15:58:15.443875+00	2022-11-30 15:58:15+00	5	1b17a5fa01914c9ca13874f5be978ea2
6	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTgyNDA5NCwiaWF0IjoxNjY5NzM3Njk0LCJqdGkiOiI3ODFkYTQxZWE3MmE0OWYyOTEwZmIxZjljNTI4MjBjOCIsInVzZXJfaWQiOjZ9.Q4jgfaQxtGXpX_DntIlv2nXl92wk93gW_TGtufTtzgk	2022-11-29 16:01:34.384093+00	2022-11-30 16:01:34+00	6	781da41ea72a49f2910fb1f9c52820c8
7	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTgyNDA5NywiaWF0IjoxNjY5NzM3Njk3LCJqdGkiOiI4ZTE1YmU1M2UwMzY0NmUwYTkxMzFlNjlkMTliOTdmNiIsInVzZXJfaWQiOjZ9.PLuGWScrbPMNWBBHgTqWHlG7JZI7wMqbUdF-XpEYXdY	2022-11-29 16:01:37.358846+00	2022-11-30 16:01:37+00	6	8e15be53e03646e0a9131e69d19b97f6
8	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTgyNDA5NywiaWF0IjoxNjY5NzM3Njk3LCJqdGkiOiJiNDc3YjllNjI4OGM0YWQyOWUzOTM2OWM4MjFmZmQ0MyIsInVzZXJfaWQiOjZ9.7EGRvuS0fd74mJupo6v6cJyC234fceW5lF-MRURVsWg	2022-11-29 16:01:37.366329+00	2022-11-30 16:01:37+00	6	b477b9e6288c4ad29e39369c821ffd43
9	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTgyNDY0OCwiaWF0IjoxNjY5NzM4MjQ4LCJqdGkiOiJjZjlkZTEzZWVjNGY0Njk5ODAwZjAyMmQ5NTliNmU2YSIsInVzZXJfaWQiOjZ9.1iQTOYP55C-vx_zon90GG2JKkksag6HPof8MtD82r3s	2022-11-29 16:10:48.74137+00	2022-11-30 16:10:48+00	6	cf9de13eec4f4699800f022d959b6e6a
10	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTgyNDY0OCwiaWF0IjoxNjY5NzM4MjQ4LCJqdGkiOiIyNzFmMmRmYzllNzU0ZjliOGRiODQ3YzE3MjRiNWE3NCIsInVzZXJfaWQiOjZ9.LrOKAW8ds-Ubrp4pjdu5U4lCV3IbxTtP_EJzhSnBEEk	2022-11-29 16:10:48.751022+00	2022-11-30 16:10:48+00	6	271f2dfc9e754f9b8db847c1724b5a74
11	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTgyNDY1NiwiaWF0IjoxNjY5NzM4MjU2LCJqdGkiOiI3Njk4MWQ4ZjdjMjE0Y2NjYjRmZjAwM2UyNTliMWNhNiIsInVzZXJfaWQiOjV9.aimnxReoNIJSpBzV5tSBv9YC44NXZz3dYBTJGYjQyLE	2022-11-29 16:10:56.941152+00	2022-11-30 16:10:56+00	5	76981d8f7c214cccb4ff003e259b1ca6
12	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTgyNDY1NiwiaWF0IjoxNjY5NzM4MjU2LCJqdGkiOiJiZWRlNTE0MjY4NmU0MGIxYTFhODBiN2Q1N2YxZDA2MiIsInVzZXJfaWQiOjV9.IOotXUzKHQldv9neojxj6fqFBXSZN22N8O4SsxuP7UM	2022-11-29 16:10:56.951614+00	2022-11-30 16:10:56+00	5	bede5142686e40b1a1a80b7d57f1d062
13	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTgyNDc2MCwiaWF0IjoxNjY5NzM4MzYwLCJqdGkiOiIzNjIxNWQzOWYwMTA0ZmFhOWRiZjU4OTYzODc3OTJmZCIsInVzZXJfaWQiOjZ9.v-pANYIlUJF1j1Lsou0HReR2zWNbQLdkPL3PpK2CHuE	2022-11-29 16:12:40.285154+00	2022-11-30 16:12:40+00	6	36215d39f0104faa9dbf5896387792fd
14	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTgyNDc2MCwiaWF0IjoxNjY5NzM4MzYwLCJqdGkiOiJiOGY5NGRlNmI4NjQ0ZDEwOTUyZjYwZjQ3NGViYmM4NyIsInVzZXJfaWQiOjZ9.nsI5c5IqlGyxNRbx9cuUXffDBP7hyrKy0dmhxcv9mlQ	2022-11-29 16:12:40.292967+00	2022-11-30 16:12:40+00	6	b8f94de6b8644d10952f60f474ebbc87
15	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTgyNDc4OSwiaWF0IjoxNjY5NzM4Mzg5LCJqdGkiOiIwM2YwY2UyMWQ4ODE0ZjdiOWEzZWE3MDIwZTgzZmJlMSIsInVzZXJfaWQiOjV9.XcLNQ8UoVywjjwrwEthqRTOoqt78UIlZ0Pz9L1LhzIs	2022-11-29 16:13:09.54142+00	2022-11-30 16:13:09+00	5	03f0ce21d8814f7b9a3ea7020e83fbe1
16	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTgyNDc4OSwiaWF0IjoxNjY5NzM4Mzg5LCJqdGkiOiIxMDI5NzA3ZGViYmM0NDZjYjdlMzIyYTMyN2YyOGE5NiIsInVzZXJfaWQiOjV9.pm82Vt_w77A5xDbRh4rFSl64By4W_vj3jpfaSbwTo3Y	2022-11-29 16:13:09.564035+00	2022-11-30 16:13:09+00	5	1029707debbc446cb7e322a327f28a96
17	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTg0NzgxNCwiaWF0IjoxNjY5NzYxNDE0LCJqdGkiOiI2ZjRjOTA3YTQ5MDQ0NzMwODRmZTM0MTJjNzg4MjcyNiIsInVzZXJfaWQiOjZ9.0qEKu0hkIYRv7EtbjgASGyVoXbzBQRBiSEds254ta7Q	2022-11-29 22:36:54.497685+00	2022-11-30 22:36:54+00	6	6f4c907a4904473084fe3412c7882726
18	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTg0NzgxNCwiaWF0IjoxNjY5NzYxNDE0LCJqdGkiOiIzODY5OWI1NjU0NzI0NWQxYWI4ZWQ5YjZiNGI2YmUyOCIsInVzZXJfaWQiOjZ9.ogvTjX2Kijgf9PV2kryeKhA3z-WV2wmQRVVJlCCYc70	2022-11-29 22:36:54.506952+00	2022-11-30 22:36:54+00	6	38699b56547245d1ab8ed9b6b4b6be28
19	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTg1MDUxNiwiaWF0IjoxNjY5NzY0MTE2LCJqdGkiOiI2NGNkMzBkZDk1MDg0OGI0ODM1NzM4ZmMyYzRjZTliMyIsInVzZXJfaWQiOjV9.18IfJHwDr_htnGs5JCgu5m2Rx_tNmHDGfRlnIkcO1-0	2022-11-29 23:21:56.66493+00	2022-11-30 23:21:56+00	5	64cd30dd950848b4835738fc2c4ce9b3
20	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTg1MDUxNiwiaWF0IjoxNjY5NzY0MTE2LCJqdGkiOiI1MjcyOWVlOGQ1ZDU0NTIzYTE3NzZiMjA3NzhhOWM4ZCIsInVzZXJfaWQiOjV9.IITPfrOKcEzkigrTdeGKP-lBApRhF0XsB0mqrwuE9uE	2022-11-29 23:21:56.676962+00	2022-11-30 23:21:56+00	5	52729ee8d5d54523a1776b20778a9c8d
21	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTk2NzUyNywiaWF0IjoxNjY5ODgxMTI3LCJqdGkiOiJkODhlMWZjY2YyMzU0NTY5YTQ0MDJmMmNlYWM1MzA3ZCIsInVzZXJfaWQiOjV9.AU1Q-VdwfX70jQFneeT7D4ahDbSEpjm_R46-0gsmDgw	2022-12-01 07:52:07.188434+00	2022-12-02 07:52:07+00	5	d88e1fccf2354569a4402f2ceac5307d
22	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTk2NzUyNywiaWF0IjoxNjY5ODgxMTI3LCJqdGkiOiI3ZDQ2YTlmNmE5NWI0ODRlOWY0ZjkwMzI3YzMxNTdkMiIsInVzZXJfaWQiOjV9.wKEfLKBXieDmrWcvlC2-4YF0OgPxUJCz9Z6SKi81c-k	2022-12-01 07:52:07.199863+00	2022-12-02 07:52:07+00	5	7d46a9f6a95b484e9f4f90327c3157d2
23	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTk2NzU2MSwiaWF0IjoxNjY5ODgxMTYxLCJqdGkiOiJhZDVhMmNlYjE1ODU0YzJhYTE1MGMyZGU1NTQ2ZjhhOSIsInVzZXJfaWQiOjZ9.zwULGSqJBvEiAKFbUgN2uU-d7baw_cWewvxDLNL8WGk	2022-12-01 07:52:41.255954+00	2022-12-02 07:52:41+00	6	ad5a2ceb15854c2aa150c2de5546f8a9
24	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTk2NzU2MSwiaWF0IjoxNjY5ODgxMTYxLCJqdGkiOiIzYTRhZWUwODc1YTA0OGM0YjFhNmQ4MGNiMjgxOTVlOCIsInVzZXJfaWQiOjZ9.g-2DNOd73-uO436kRC7-cmOKguXk3hRMIUdlfTp1L_0	2022-12-01 07:52:41.261636+00	2022-12-02 07:52:41+00	6	3a4aee0875a048c4b1a6d80cb28195e8
25	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTk5Njc3NSwiaWF0IjoxNjY5OTEwMzc1LCJqdGkiOiJkOTRjYWQ3MDViZWU0YjQyYTkwY2E0Nzk5N2ZiYWVlNyIsInVzZXJfaWQiOjF9.PZaz3T5DA3FjWYj0zHIu7VZTnYlR0SseritlXiD0GEU	2022-12-01 15:59:35.775682+00	2022-12-02 15:59:35+00	1	d94cad705bee4b42a90ca47997fbaee7
26	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTk5Njc3NSwiaWF0IjoxNjY5OTEwMzc1LCJqdGkiOiIzNjg4MmM2ODQ5Y2M0YzI3ODI5MTRkZmNjNGVkYmUyMCIsInVzZXJfaWQiOjF9.95VkHDLOiCZuucrl1NOjUQsnLiGGeFBcvoWcKGgjniI	2022-12-01 15:59:35.786371+00	2022-12-02 15:59:35+00	1	36882c6849cc4c2782914dfcc4edbe20
27	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTk5NjgwNSwiaWF0IjoxNjY5OTEwNDA1LCJqdGkiOiIxODRhZDRjNzEwNzQ0MDdiYmU4YjlhZTBhM2M2MmQ3MyIsInVzZXJfaWQiOjF9.vMYItSrlF6miyt_EatXrydxWQcAAIVSGvOyaU4zq8PU	2022-12-01 16:00:05.688983+00	2022-12-02 16:00:05+00	1	184ad4c71074407bbe8b9ae0a3c62d73
28	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTk5NjgwNSwiaWF0IjoxNjY5OTEwNDA1LCJqdGkiOiJiMTUzYzI0YzA5ODE0M2E0OWQ0Yjk0NDA2OGVkNWQ3MyIsInVzZXJfaWQiOjF9.OxQpvjeNXzqmjOQFJ2gK0P0dZNKDztdcCJmHs1_K9nY	2022-12-01 16:00:05.707946+00	2022-12-02 16:00:05+00	1	b153c24c098143a49d4b944068ed5d73
29	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTk5NzMyMSwiaWF0IjoxNjY5OTEwOTIxLCJqdGkiOiJmNmE0MTViMTZkMzY0Yjk0OGQ2ZGNmOGU4ZmFlYzhlYyIsInVzZXJfaWQiOjZ9.v_D7Pf5teuF4k5Vx2CFaxEuPY02fbrIuJMc4xBMTSBo	2022-12-01 16:08:41.784663+00	2022-12-02 16:08:41+00	6	f6a415b16d364b948d6dcf8e8faec8ec
30	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTk5NzMyMSwiaWF0IjoxNjY5OTEwOTIxLCJqdGkiOiIzY2UwNDQxOGY5Y2I0ZDc1OTBlZWFmNGU2MWJkZGVmNCIsInVzZXJfaWQiOjZ9.uBn9E-z12fKqpDfpVdVdatjakgXLBR2VyGn70v2qsuo	2022-12-01 16:08:41.795434+00	2022-12-02 16:08:41+00	6	3ce04418f9cb4d7590eeaf4e61bddef4
31	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTk5OTMyNywiaWF0IjoxNjY5OTEyOTI3LCJqdGkiOiJhYzBiMzA5NzQ4MmM0NDkyYTNjZTUwNzgwMThmZWRmZiIsInVzZXJfaWQiOjF9.QAXyiknNCpSdQ1MxVi7egO7waBZe0-_vYDyvOz3Kzhk	2022-12-01 16:42:07.979961+00	2022-12-02 16:42:07+00	1	ac0b3097482c4492a3ce5078018fedff
32	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTk5OTMyOCwiaWF0IjoxNjY5OTEyOTI4LCJqdGkiOiJjNzg3ZWQyYjg0NmU0MjYzYjE0NjQzZTQwZTY4OTU2OCIsInVzZXJfaWQiOjF9.RyYxQ7wycFrUkDpTaH6lg79gvM5qbD4MDibdxTJH_y8	2022-12-01 16:42:08.000652+00	2022-12-02 16:42:08+00	1	c787ed2b846e4263b14643e40e689568
33	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTk5OTMzNywiaWF0IjoxNjY5OTEyOTM3LCJqdGkiOiJkNzg2YmQ5M2FhNzk0ZGE0OGIzNGE2M2IxOTBhYjc5OCIsInVzZXJfaWQiOjF9.pjCBWEKCRgLopMpqOeMzeePIVge6URSztTfxy-nFqlc	2022-12-01 16:42:17.532168+00	2022-12-02 16:42:17+00	1	d786bd93aa794da48b34a63b190ab798
34	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTk5OTMzNywiaWF0IjoxNjY5OTEyOTM3LCJqdGkiOiJmNjgwY2YyZWYwYWY0ZDMyYmY2ZTk2ZTcyMDI1YjIxZSIsInVzZXJfaWQiOjF9.46Tio0mvm3LlBd1X3DSdMm9Etfc530RjPbgliYZymxM	2022-12-01 16:42:17.545254+00	2022-12-02 16:42:17+00	1	f680cf2ef0af4d32bf6e96e72025b21e
35	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTk5OTU3OCwiaWF0IjoxNjY5OTEzMTc4LCJqdGkiOiJlODIxMmY1MzhhODg0ZTIyYmVjZDY5NDc1NzBlNDJhMyIsInVzZXJfaWQiOjF9.ijO-cHRt626IdZz793HyWTY8lRgt3XaiVmHMSlCF4ns	2022-12-01 16:46:18.186508+00	2022-12-02 16:46:18+00	1	e8212f538a884e22becd6947570e42a3
36	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2OTk5OTU3OCwiaWF0IjoxNjY5OTEzMTc4LCJqdGkiOiI3NjJhYzNkNjMzYjQ0MWNiYTMzN2I0NGI1ODlhMDJjMCIsInVzZXJfaWQiOjF9.DAMOEOnoqIKhDnQxqkdkQrr9IYdb3Xfp6DvpPs7Dmkw	2022-12-01 16:46:18.203608+00	2022-12-02 16:46:18+00	1	762ac3d633b441cba337b44b589a02c0
37	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAwMTY5NSwiaWF0IjoxNjY5OTE1Mjk1LCJqdGkiOiJjMTJkZWM1Yjg4ZmM0ODhjODNmNmIwZjIxOTc2MDVkMiIsInVzZXJfaWQiOjF9.lYUlFoAZfBk2Tj-FzQ5d_GChwh5lSv5JrptZBAgfNCw	2022-12-01 17:21:35.138734+00	2022-12-02 17:21:35+00	1	c12dec5b88fc488c83f6b0f2197605d2
38	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAwMTY5NSwiaWF0IjoxNjY5OTE1Mjk1LCJqdGkiOiJhYjBjOGRiYWJkNWM0ZDlkODM5YTQ2YWI4NjZlZmJiZCIsInVzZXJfaWQiOjF9.2fNDbB2QW4_gyDfbLq_4TVHIYuoM8woS53Z6ZVvv6Qw	2022-12-01 17:21:35.150568+00	2022-12-02 17:21:35+00	1	ab0c8dbabd5c4d9d839a46ab866efbbd
39	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAyNjEwNywiaWF0IjoxNjY5OTM5NzA3LCJqdGkiOiJkYjY0MGQ5MTA0ODc0OTU2ODgxNTZmMDdkZjhjOGUzMyIsInVzZXJfaWQiOjF9.vblUim06gWO6CGPjMahamwdVtHDhzsCP9rIGEd8zXm0	2022-12-02 00:08:27.148644+00	2022-12-03 00:08:27+00	1	db640d910487495688156f07df8c8e33
40	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAyNjEwNywiaWF0IjoxNjY5OTM5NzA3LCJqdGkiOiIxYTJhODEyMjFiMzc0NDhlYmU5ZjVjMzk1MTBhNWMwOCIsInVzZXJfaWQiOjF9.OqHRjwDQW9ERFtdkCQsQKvxj-MyzKTGiyvfa32mB9x8	2022-12-02 00:08:27.157553+00	2022-12-03 00:08:27+00	1	1a2a81221b37448ebe9f5c39510a5c08
41	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAyNjE2OSwiaWF0IjoxNjY5OTM5NzY5LCJqdGkiOiJlMjczZjUwNjIxMzU0MDIxOGFlMDNhOGYxYjczNjE4OCIsInVzZXJfaWQiOjF9.Gj1lMjR2oeJLrOlyz_Pflz3t6Qbs4BOPnbgfFtRB-ys	2022-12-02 00:09:29.252266+00	2022-12-03 00:09:29+00	1	e273f506213540218ae03a8f1b736188
42	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAyNjE2OSwiaWF0IjoxNjY5OTM5NzY5LCJqdGkiOiI2NjkwYWNjMDJlMDc0NjM3YWQyY2QwZjE0NzhjYTQ2NCIsInVzZXJfaWQiOjF9.7b6VgnW7J2K3c1obM6Yd271arh6r82iKDOsLOo0eMsY	2022-12-02 00:09:29.261741+00	2022-12-03 00:09:29+00	1	6690acc02e074637ad2cd0f1478ca464
43	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAyNjI2NiwiaWF0IjoxNjY5OTM5ODY2LCJqdGkiOiJjMzlkZGU5MDA5ODc0MmJmYmQ0MDk1NzI5ZGViNmIzNSIsInVzZXJfaWQiOjF9.FzrQBKTvZwvqVOz4ZdN_9TH9dWqXStn-YszPIWh3oa8	2022-12-02 00:11:06.219868+00	2022-12-03 00:11:06+00	1	c39dde90098742bfbd4095729deb6b35
44	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAyNjI2NiwiaWF0IjoxNjY5OTM5ODY2LCJqdGkiOiI5MGUzMmEyMjU2MTc0OGVkOGI4ZThmOTZiZDE4YjJiYSIsInVzZXJfaWQiOjF9.E88IpzoZjOf7wFJgl1mYXbSipIG3xYcsQKpPysDoxGo	2022-12-02 00:11:06.230514+00	2022-12-03 00:11:06+00	1	90e32a22561748ed8b8e8f96bd18b2ba
45	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAyNjI3MCwiaWF0IjoxNjY5OTM5ODcwLCJqdGkiOiIxM2FjOWYwNWEyYzQ0OWY2YTkwMzBjNzhjNGQwNTRhNyIsInVzZXJfaWQiOjF9.bPt-I7mKQNg1yKJj-xO0ZNWM6n80MP8ioC2sdzMFfIE	2022-12-02 00:11:10.915523+00	2022-12-03 00:11:10+00	1	13ac9f05a2c449f6a9030c78c4d054a7
46	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAyNjI3MCwiaWF0IjoxNjY5OTM5ODcwLCJqdGkiOiI1MjhiZGU3M2FkYzE0MmU4YmI3M2E5NTUwZTA2ZWZiNCIsInVzZXJfaWQiOjF9.-o6_QXVC35CODTK4HJq-_fbw68eSsXjCC4xuJRPuLyM	2022-12-02 00:11:10.923752+00	2022-12-03 00:11:10+00	1	528bde73adc142e8bb73a9550e06efb4
47	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAyNjI4OSwiaWF0IjoxNjY5OTM5ODg5LCJqdGkiOiI5YTQwNTFhNTAzMjM0MzFhYTZmM2ZmZjEwN2M1ZDBlNiIsInVzZXJfaWQiOjF9._L53xrrJsm_3OWvVxT4tzgHXMdCRyWR7VRPF0-PXjBQ	2022-12-02 00:11:29.751608+00	2022-12-03 00:11:29+00	1	9a4051a50323431aa6f3fff107c5d0e6
48	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAyNjI4OSwiaWF0IjoxNjY5OTM5ODg5LCJqdGkiOiIzZjVlMTcxNWQ2NzE0NWIxYjVlMmEyNGY4ZjI0ODBkNSIsInVzZXJfaWQiOjF9.fl16iG4cFocCSllCEfBd1VwuN0R9H9q6xTLfBe70GfE	2022-12-02 00:11:29.759115+00	2022-12-03 00:11:29+00	1	3f5e1715d67145b1b5e2a24f8f2480d5
49	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzMjcyOCwiaWF0IjoxNjY5OTQ2MzI4LCJqdGkiOiI1NDc2MjczZGIyMWU0MzllYjZhYWJmZTc2YzE5MTBlMiIsInVzZXJfaWQiOjF9.vycxMxAVdjmZ5V8UQvHbgWABeUmnk1RLgNaf9eJtStU	2022-12-02 01:58:48.485508+00	2022-12-03 01:58:48+00	1	5476273db21e439eb6aabfe76c1910e2
50	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzMjcyOCwiaWF0IjoxNjY5OTQ2MzI4LCJqdGkiOiJiM2JiNjNkZjNkNDc0MjIzYTcwNjAxNDJjZmVjMTg1NSIsInVzZXJfaWQiOjF9.1A9JzBSBID2Pfsnl4rC5MtHYicq1a1x-AOIDTxQJSmA	2022-12-02 01:58:48.506344+00	2022-12-03 01:58:48+00	1	b3bb63df3d474223a7060142cfec1855
51	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzMjczNiwiaWF0IjoxNjY5OTQ2MzM2LCJqdGkiOiIwYmIxMTRkYTFlMTM0Y2I5ODcxMDI2MzAwNmJkZjgyMiIsInVzZXJfaWQiOjF9.cVclmQoa1pb_ZipjlS_KIseGHKhvxo8iUqIhuNokxYE	2022-12-02 01:58:56.853771+00	2022-12-03 01:58:56+00	1	0bb114da1e134cb98710263006bdf822
52	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzMjczNiwiaWF0IjoxNjY5OTQ2MzM2LCJqdGkiOiI5ZWNjMmU2MzFhMTU0NTVjYTIzYTM1NDk4NGQzODE2YSIsInVzZXJfaWQiOjF9.uamjBoco0ywqY0w5JTbNRrSfHD_yjJLhh0HHLlbuAfE	2022-12-02 01:58:56.874359+00	2022-12-03 01:58:56+00	1	9ecc2e631a15455ca23a354984d3816a
53	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzMjgwMCwiaWF0IjoxNjY5OTQ2NDAwLCJqdGkiOiJlMTVlNTA5ZTE3NDc0YTIwOTk1MWNlODVhZDIxZTNjZSIsInVzZXJfaWQiOjF9.Gy2bewvfcGRQq4VzHQ2C__8gYAP7JJe0NCjnD-ajRe8	2022-12-02 02:00:00.030387+00	2022-12-03 02:00:00+00	1	e15e509e17474a209951ce85ad21e3ce
54	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzMjgwMCwiaWF0IjoxNjY5OTQ2NDAwLCJqdGkiOiI0OTNhMWViZDc5NWM0MTU2OTc0M2FhNjQ0MWQzZDAxZiIsInVzZXJfaWQiOjF9.GE9-6W3Hl4I51Lc37eB98m72OwnEiJLQ1UvIoG_t-QU	2022-12-02 02:00:00.040269+00	2022-12-03 02:00:00+00	1	493a1ebd795c41569743aa6441d3d01f
55	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzMzc0MSwiaWF0IjoxNjY5OTQ3MzQxLCJqdGkiOiJmMjM3MGE2ZmZhNDA0NDE4YjhiZTY1NjFiZmViODQwMSIsInVzZXJfaWQiOjF9.V9jRRFeqC2codGsVj_Or3kgTdFZNklsgyCJvRXbHGIU	2022-12-02 02:15:41.898626+00	2022-12-03 02:15:41+00	1	f2370a6ffa404418b8be6561bfeb8401
56	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzMzc0MSwiaWF0IjoxNjY5OTQ3MzQxLCJqdGkiOiI5ZTYxYjIwMDM3NzI0MmIxYjUwODU4MzE3NzE3NDVmNiIsInVzZXJfaWQiOjF9.gscKU65yRSctQ-W8nR7a-3yAopSrUb4Hj6DR9cccDt8	2022-12-02 02:15:41.913279+00	2022-12-03 02:15:41+00	1	9e61b200377242b1b5085831771745f6
57	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzMzgzOCwiaWF0IjoxNjY5OTQ3NDM4LCJqdGkiOiJhNWI4MTJmMjlkOTM0ZTlkOWQyZTVlMDVlNjZmYzdmOSIsInVzZXJfaWQiOjF9.xlqmxJIroWTN_A8xs01e-CLl-bOAG1vAiHOmiXPkWZU	2022-12-02 02:17:18.093379+00	2022-12-03 02:17:18+00	1	a5b812f29d934e9d9d2e5e05e66fc7f9
58	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzMzgzOCwiaWF0IjoxNjY5OTQ3NDM4LCJqdGkiOiI1NzllMDY5ZDQwMmQ0ZjViOWM1Yzk1MGViZGEwYjRkYyIsInVzZXJfaWQiOjF9.11p_4SGNWegQOa70JbVPVcAXNw-Vxp6ALXOzDRmE61M	2022-12-02 02:17:18.106891+00	2022-12-03 02:17:18+00	1	579e069d402d4f5b9c5c950ebda0b4dc
59	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzNDA1OSwiaWF0IjoxNjY5OTQ3NjU5LCJqdGkiOiI1YTUxYWJjODI5N2E0NDI1YTgzZDYwOTQ4MzZmZTg0MyIsInVzZXJfaWQiOjF9.Jj3bfPiCWboE3BIe2RvwguoDisCRJUHcpNvVY-b2Dh4	2022-12-02 02:20:59.838018+00	2022-12-03 02:20:59+00	1	5a51abc8297a4425a83d6094836fe843
60	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzNDA1OSwiaWF0IjoxNjY5OTQ3NjU5LCJqdGkiOiJiYjI2NTk1NTA2NjQ0NDc0YWVlMGZmYWFiMTIwM2RhMSIsInVzZXJfaWQiOjF9.b2u4CQDspULYYr6a5ayku9_CeGIl1nWhr46IKdstiXc	2022-12-02 02:20:59.879341+00	2022-12-03 02:20:59+00	1	bb26595506644474aee0ffaab1203da1
61	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzNDA5MywiaWF0IjoxNjY5OTQ3NjkzLCJqdGkiOiIwZTkyN2Y3OTRmZGU0MzlkOWEwMTFhMTc1ZWVkZGMxMiIsInVzZXJfaWQiOjF9.xcvEEk2EGdFIK9REmyL7waEKbhTvk0Lo1ezYGACmazM	2022-12-02 02:21:33.398249+00	2022-12-03 02:21:33+00	1	0e927f794fde439d9a011a175eeddc12
62	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzNDA5MywiaWF0IjoxNjY5OTQ3NjkzLCJqdGkiOiJlMzIzMTdhMWNlNWE0N2E1ODk4OTRmNjA0Y2ZlY2E1OCIsInVzZXJfaWQiOjF9.7qUByCfLWAezZ0TOsP83ir0pIxP48bYcRSc4NGrMHoQ	2022-12-02 02:21:33.411744+00	2022-12-03 02:21:33+00	1	e32317a1ce5a47a589894f604cfeca58
63	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzNDExMSwiaWF0IjoxNjY5OTQ3NzExLCJqdGkiOiIzZWEwMGU4NDY5MTM0MzBjODU1M2M2MjI1MjVlZjdhNCIsInVzZXJfaWQiOjF9.56vJFEWuGCvpGYO7mCciidSr-vePKoZJmHkFhZjWAJA	2022-12-02 02:21:51.105906+00	2022-12-03 02:21:51+00	1	3ea00e846913430c8553c622525ef7a4
64	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzNDExMSwiaWF0IjoxNjY5OTQ3NzExLCJqdGkiOiIyM2RmZDdiY2U0ZTE0YmYzOWMwMGM3ODU0NWE5MGU2YyIsInVzZXJfaWQiOjF9.Pv21XNm3kH0Bn-Xk_5uo--x_ZoJDreOfNl6ZO5uU2dc	2022-12-02 02:21:51.118361+00	2022-12-03 02:21:51+00	1	23dfd7bce4e14bf39c00c78545a90e6c
65	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzNDIzNSwiaWF0IjoxNjY5OTQ3ODM1LCJqdGkiOiIyNjZiZmNjMzcyNjA0NjJhOWU1NWM2ZmZkN2QyZmQxYSIsInVzZXJfaWQiOjF9.FIC5FnLME6VRYOpCtANkmif-lOGBBj4aLMGr2LyMpAk	2022-12-02 02:23:55.312049+00	2022-12-03 02:23:55+00	1	266bfcc37260462a9e55c6ffd7d2fd1a
66	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzNDIzNSwiaWF0IjoxNjY5OTQ3ODM1LCJqdGkiOiJlNGJjMjQ5ZGIzNjQ0ODQ5YWQzYTIzYmNjMDUzYWM5MyIsInVzZXJfaWQiOjF9.qiOh0pPhOpJYtBpqOkzIK2MmbDQkUZAZOniRKKlPg7k	2022-12-02 02:23:55.324276+00	2022-12-03 02:23:55+00	1	e4bc249db3644849ad3a23bcc053ac93
67	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzNDMzMiwiaWF0IjoxNjY5OTQ3OTMyLCJqdGkiOiI0Y2ViNDlkNzk4NzE0MTc5OThmY2E5MDMyMWFmNGZhMSIsInVzZXJfaWQiOjF9.UP9lIFt8PCNIp_jQkNgj1bnb526RzhflfkDzjbQ7Qdo	2022-12-02 02:25:32.698635+00	2022-12-03 02:25:32+00	1	4ceb49d79871417998fca90321af4fa1
68	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDAzNDMzMiwiaWF0IjoxNjY5OTQ3OTMyLCJqdGkiOiI0ZDE4ZDE1MzEzMWM0OTQ2YWY2NGY5ZTJiMDA1YWY5NiIsInVzZXJfaWQiOjF9.RA45KIqH7NGiiObV9ZArL3GMXCgVeSDgJJI-R6fsy58	2022-12-02 02:25:32.707288+00	2022-12-03 02:25:32+00	1	4d18d153131c4946af64f9e2b005af96
69	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDA1ODgwNywiaWF0IjoxNjY5OTcyNDA3LCJqdGkiOiJkMGZkZWI4NTRiNzA0ZjA1ODNmMjViZjgzZDFjZTJiOCIsInVzZXJfaWQiOjF9.a-z75hiwZhm6xS7gun-ZC2WUSC3gvIEy3PBZ2prD5ms	2022-12-02 09:13:27.396456+00	2022-12-03 09:13:27+00	1	d0fdeb854b704f0583f25bf83d1ce2b8
70	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDA1ODgwNywiaWF0IjoxNjY5OTcyNDA3LCJqdGkiOiI0ZmM2OGEwNmRkMTI0Y2RlYTIyNWJlMDhiMzY1ZmZhOSIsInVzZXJfaWQiOjF9.ZGPLajR--8xfzuwtcs5oce4Q3iyWhqlCQKSLK71HJUQ	2022-12-02 09:13:27.408029+00	2022-12-03 09:13:27+00	1	4fc68a06dd124cdea225be08b365ffa9
71	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyNjY3MiwiaWF0IjoxNjcwMDQwMjcyLCJqdGkiOiIxMDZjZGU5ZDBkM2E0YjViOTAxOTM1MmVlZDZhOTIwNiIsInVzZXJfaWQiOjd9.cBsibziWmkemzf9VPQbOWZzYy34lqyovuagn-kWIt0Q	2022-12-03 04:04:32.135933+00	2022-12-04 04:04:32+00	7	106cde9d0d3a4b5b9019352eed6a9206
72	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyNjY4OSwiaWF0IjoxNjcwMDQwMjg5LCJqdGkiOiI5YjAzOTlkNGM5N2Y0ZmM1OGQyZDEzMjRjY2EzZjI5YSIsInVzZXJfaWQiOjF9.B3HeW5lxk3sWFgERSC1Yyy8bafIaQjmC39cSz-WiaXE	2022-12-03 04:04:49.752299+00	2022-12-04 04:04:49+00	1	9b0399d4c97f4fc58d2d1324cca3f29a
73	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyNjY4OSwiaWF0IjoxNjcwMDQwMjg5LCJqdGkiOiJjNDA5NDI5ODgwNTE0MTVhODAyOTc0MDc3OTE4NGRiNiIsInVzZXJfaWQiOjF9.5wPKvzh8uTTxlxegsEaqyG0cxvvbHSrvBPUMS39beno	2022-12-03 04:04:49.75855+00	2022-12-04 04:04:49+00	1	c40942988051415a8029740779184db6
74	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyNzA1OCwiaWF0IjoxNjcwMDQwNjU4LCJqdGkiOiI1MzU3YTRlNGYzMTk0NWU0YTViNmFjZWE3NjFjMDdiYiIsInVzZXJfaWQiOjF9.Ihr_tGg1qaZNeaRhKQhlcisdURi-KKKjWN3TJ9ebKLs	2022-12-03 04:10:58.379219+00	2022-12-04 04:10:58+00	1	5357a4e4f31945e4a5b6acea761c07bb
75	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyNzA1OCwiaWF0IjoxNjcwMDQwNjU4LCJqdGkiOiI5M2FlYWY1YTM1OTc0MDU2YWFiMjBjNWMyYmE5NzRhOCIsInVzZXJfaWQiOjF9.jM10O0nzXDIs9jNy_WtEtm8G4BC1EE92OTd8fwojAIs	2022-12-03 04:10:58.40335+00	2022-12-04 04:10:58+00	1	93aeaf5a35974056aab20c5c2ba974a8
76	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyNzM5MSwiaWF0IjoxNjcwMDQwOTkxLCJqdGkiOiI0YTUwNjQ0YzBhYjE0YTk2OGI5MDc0YjU3NWM4NmI0MCIsInVzZXJfaWQiOjF9.Q4OvwQ_EFEa3e2Jkx62oFQ4r5Ge1Qowp3UhTAwt1p1s	2022-12-03 04:16:31.201608+00	2022-12-04 04:16:31+00	1	4a50644c0ab14a968b9074b575c86b40
77	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyNzM5MSwiaWF0IjoxNjcwMDQwOTkxLCJqdGkiOiJkOTM1MzA5ODg3MDA0YzA0OWFmMDgxMWRiNjBkZTkzMCIsInVzZXJfaWQiOjF9.2IeBvMd-h3CB6P-kzEpZ-uuB7bKP-Idger186gPrmcU	2022-12-03 04:16:31.218383+00	2022-12-04 04:16:31+00	1	d935309887004c049af0811db60de930
78	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyNzQxMCwiaWF0IjoxNjcwMDQxMDEwLCJqdGkiOiJlNGYyOTJlYmNiMWY0MDQ0YTIyYzU2ZmY0NzVhM2FiZCIsInVzZXJfaWQiOjV9.GPvMnTmasf-zjoHdfyGaJ_IMDq4CbVfbFZDs9ycIoW4	2022-12-03 04:16:50.154624+00	2022-12-04 04:16:50+00	5	e4f292ebcb1f4044a22c56ff475a3abd
79	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyNzQxMCwiaWF0IjoxNjcwMDQxMDEwLCJqdGkiOiI5NjlkODgyZWExYjY0NTBjYmE5NmY0ZjhkYTUzNTNkMyIsInVzZXJfaWQiOjV9.oCv2R30t5PYe8Rjvy_iuWgvg__UJqNAwSmHfHOAUSNU	2022-12-03 04:16:50.163644+00	2022-12-04 04:16:50+00	5	969d882ea1b6450cba96f4f8da5353d3
80	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyNzkyMSwiaWF0IjoxNjcwMDQxNTIxLCJqdGkiOiI0ZjdiZTA4NjhiMGU0NjgyYjg3Mjc4ZTE3N2NiMDdkZSIsInVzZXJfaWQiOjd9.48lcjfucLughO3v3fqd_t7pIw7wWqKSHKNIrXLHR468	2022-12-03 04:25:21.879565+00	2022-12-04 04:25:21+00	7	4f7be0868b0e4682b87278e177cb07de
81	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyNzkyMSwiaWF0IjoxNjcwMDQxNTIxLCJqdGkiOiIzZTVmYjVjYzA5NDE0NmNkODMyODBlMDQ2ZGQ1ZmI3MiIsInVzZXJfaWQiOjd9.TpvT8DUTila4LzbAzpuREcJmwj44o24zbiNdVF3PBbs	2022-12-03 04:25:21.887845+00	2022-12-04 04:25:21+00	7	3e5fb5cc094146cd83280e046dd5fb72
82	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyNzk1OSwiaWF0IjoxNjcwMDQxNTU5LCJqdGkiOiIyZmRjNzJjZDc3NDc0ZmE2YTlmOWJlYjdiMDM5MDcxNCIsInVzZXJfaWQiOjd9.gNhkvGxQm5UvDJn2_2_osU8g29Nws9MMHpEJ-QAguN4	2022-12-03 04:25:59.36228+00	2022-12-04 04:25:59+00	7	2fdc72cd77474fa6a9f9beb7b0390714
83	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyNzk1OSwiaWF0IjoxNjcwMDQxNTU5LCJqdGkiOiIzZWM4NDIzNmU0MDI0ZDYxYTMwMTNkZWU3ODk2Yzc5ZiIsInVzZXJfaWQiOjd9.kZuE4Pt0hzKmJr_8JytTukUGs18uLr8OeRbzE6-HZZ4	2022-12-03 04:25:59.374988+00	2022-12-04 04:25:59+00	7	3ec84236e4024d61a3013dee7896c79f
84	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyODA0MCwiaWF0IjoxNjcwMDQxNjQwLCJqdGkiOiIzMWFkYjBjNjUwZTI0Njg5YTc5MGY4ZDFiY2RkZThjOCIsInVzZXJfaWQiOjZ9.MsPh4z1g31wmwGLZncwym_9MyJwrD47Kw1xWju8EOY0	2022-12-03 04:27:20.318178+00	2022-12-04 04:27:20+00	6	31adb0c650e24689a790f8d1bcdde8c8
85	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyODA0MCwiaWF0IjoxNjcwMDQxNjQwLCJqdGkiOiIwMjdjYjE5MzNjYTE0MWMxYmI3MjhlOTE1ODdkZDA2NSIsInVzZXJfaWQiOjZ9.pVBjESzBhuY50n85ZpWrOxB0kA1_vuZo1fnjGPW5sbk	2022-12-03 04:27:20.331776+00	2022-12-04 04:27:20+00	6	027cb1933ca141c1bb728e91587dd065
86	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyODE0MCwiaWF0IjoxNjcwMDQxNzQwLCJqdGkiOiJjYzFhN2Y0NGEzNGI0MWU3YWViODk5MWY5MDNlMzQ3MiIsInVzZXJfaWQiOjZ9.-_9ubimHPo7uAjwSKb7SOPX2aehPJ5lyEbsHo7uNnh0	2022-12-03 04:29:00.428532+00	2022-12-04 04:29:00+00	6	cc1a7f44a34b41e7aeb8991f903e3472
87	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyODE0MCwiaWF0IjoxNjcwMDQxNzQwLCJqdGkiOiIxYzY3NDUyZWIzMzE0MDM3YmQ0ZDY0NjkzNTFjNTgzZiIsInVzZXJfaWQiOjZ9.9buqJRxzRUQPcLsXt6jDagwQxJuu81xmN91MV5N6qIc	2022-12-03 04:29:00.443614+00	2022-12-04 04:29:00+00	6	1c67452eb3314037bd4d6469351c583f
88	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyODI4MywiaWF0IjoxNjcwMDQxODgzLCJqdGkiOiJlNTY1NWU1ZmRiOTI0MzdlYjY0OWNlMzBiOWM5Yzg5NSIsInVzZXJfaWQiOjN9.Tzsb3cvyrqw6wDMUgCT0w7xKZ5-mX6ujiOCP885C_iw	2022-12-03 04:31:23.2215+00	2022-12-04 04:31:23+00	3	e5655e5fdb92437eb649ce30b9c9c895
89	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyODI4MywiaWF0IjoxNjcwMDQxODgzLCJqdGkiOiJiMDE2NGY3ODIzZTM0NjU0OGU1OTQ1YTQwZTliYWE5MyIsInVzZXJfaWQiOjN9.6JwdVpzD2fNRvxMkRTeIREzjTtl3NVOAe0s3Wqr0VkU	2022-12-03 04:31:23.228599+00	2022-12-04 04:31:23+00	3	b0164f7823e346548e5945a40e9baa93
90	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyOTE3MSwiaWF0IjoxNjcwMDQyNzcxLCJqdGkiOiJiZWI1YTk3YjFjNzg0NTU2YmVmODA5ZjBhN2U5NzU4ZCIsInVzZXJfaWQiOjd9.NqJklrAA6NPZCA0r3z3mllQEuDHDv6A3P0gV8dBUaUc	2022-12-03 04:46:11.914853+00	2022-12-04 04:46:11+00	7	beb5a97b1c784556bef809f0a7e9758d
91	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyOTE3MSwiaWF0IjoxNjcwMDQyNzcxLCJqdGkiOiI1YWVhYjJhZjVkMzc0N2EyYWRjNzBhZjEyZmQ4OGEyZiIsInVzZXJfaWQiOjd9._HnTA-5ARJX5vKrTNPsDkYreGw3A-PULdN-LalZgUXI	2022-12-03 04:46:11.928178+00	2022-12-04 04:46:11+00	7	5aeab2af5d3747a2adc70af12fd88a2f
92	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyOTQ1MCwiaWF0IjoxNjcwMDQzMDUwLCJqdGkiOiI1ZTI0ZTg0NWE2ZjI0ODg4YjhhOTY5OWRlMTM0YzkxNyIsInVzZXJfaWQiOjV9.WeB6h-kvwf_-s2DFH_0TjDH0fMC2ITATa4IVWMoJ1cU	2022-12-03 04:50:50.826238+00	2022-12-04 04:50:50+00	5	5e24e845a6f24888b8a9699de134c917
93	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyOTQ1MCwiaWF0IjoxNjcwMDQzMDUwLCJqdGkiOiIwOWI3MTg1ZjE4MGY0OTdmODUxNjJhMDkzNzQwZWE5OSIsInVzZXJfaWQiOjV9.RCQ5DSHscYowADml9d58zr6-l8CXtP9i-MJRsvfj58g	2022-12-03 04:50:50.833825+00	2022-12-04 04:50:50+00	5	09b7185f180f497f85162a093740ea99
94	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyOTU2NiwiaWF0IjoxNjcwMDQzMTY2LCJqdGkiOiI5MjRmZDA2YzdlMDI0MjIwYWI2YjIzZmRiNGY0OTRlNSIsInVzZXJfaWQiOjF9.aglkQ55ismHRD0UzB6wdEDlgfW6lN0pqaiFa_tqFuDU	2022-12-03 04:52:46.199779+00	2022-12-04 04:52:46+00	1	924fd06c7e024220ab6b23fdb4f494e5
95	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyOTU2NiwiaWF0IjoxNjcwMDQzMTY2LCJqdGkiOiJmNTNjZWU3MDIzZTI0NTIxYTAwZTY0NzUwM2Y1ZWVkOCIsInVzZXJfaWQiOjF9.Ahawbd9sgAx9ftccfJrQrtIKbIGjUJJn10jIjwcBooQ	2022-12-03 04:52:46.208326+00	2022-12-04 04:52:46+00	1	f53cee7023e24521a00e647503f5eed8
96	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyOTY1NywiaWF0IjoxNjcwMDQzMjU3LCJqdGkiOiIwMTc5ZjE4MWI0NGM0M2E1Yjg4Mzg0YmNkY2JmMGI3OCIsInVzZXJfaWQiOjF9.4qVgFluFOICmY2fIeSNeVKRuXdKa_i8cJW1B9Q93kFE	2022-12-03 04:54:17.759016+00	2022-12-04 04:54:17+00	1	0179f181b44c43a5b88384bcdcbf0b78
97	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEyOTY1NywiaWF0IjoxNjcwMDQzMjU3LCJqdGkiOiJkYTA2MDhjY2ZkOTE0ZjBkOWYyM2E1NGQ4MjcxOGUzZCIsInVzZXJfaWQiOjF9.CTmGL5vlkmSF0YQMgkwlmVzZ5IFxsfhD7vt68dJpkHU	2022-12-03 04:54:17.772414+00	2022-12-04 04:54:17+00	1	da0608ccfd914f0d9f23a54d82718e3d
98	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzMTQyMiwiaWF0IjoxNjcwMDQ1MDIyLCJqdGkiOiI2ODViMmZkN2UzZWI0MDYzYWU4NTZhMjJkYWU3ZTVmZiIsInVzZXJfaWQiOjF9.YS2e0FS8Uhcz_cY7J3heV7_lX5llT3xDYiI0xacap_8	2022-12-03 05:23:42.767212+00	2022-12-04 05:23:42+00	1	685b2fd7e3eb4063ae856a22dae7e5ff
99	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzMTQyMiwiaWF0IjoxNjcwMDQ1MDIyLCJqdGkiOiIzZWNkZGIwNzFjMzE0YjU4ODFiYTNiZGIzOWUyZjZlYSIsInVzZXJfaWQiOjF9.Ec2WYKyLj9XGTtet2-7tQfUqtSwf-O_tig-_Vt5Z8C0	2022-12-03 05:23:42.794612+00	2022-12-04 05:23:42+00	1	3ecddb071c314b5881ba3bdb39e2f6ea
100	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzMTcxMCwiaWF0IjoxNjcwMDQ1MzEwLCJqdGkiOiI1MTIyZGQ0MjFiODc0Mjk4YjRjNTIzMTc5NGE3ZWM1NCIsInVzZXJfaWQiOjF9.vAJ1VD9u4aZ8mPuMutzeSqCZYEGB8Mm7wb-zcEsEIJQ	2022-12-03 05:28:30.581348+00	2022-12-04 05:28:30+00	1	5122dd421b874298b4c5231794a7ec54
101	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzMTcxMCwiaWF0IjoxNjcwMDQ1MzEwLCJqdGkiOiIxNGIxNzViODc1Mzc0OTE1YmVmMzhiMjFjMTFkMTgyNCIsInVzZXJfaWQiOjF9.mJGDazhtjZvgaCjK0hmOy3hg9mrXKUDEUKuA28ZIKA8	2022-12-03 05:28:30.600471+00	2022-12-04 05:28:30+00	1	14b175b875374915bef38b21c11d1824
102	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzMjc1MiwiaWF0IjoxNjcwMDQ2MzUyLCJqdGkiOiI0YjNmOGMwZmZhYjU0NjQzOTA1Y2RiNTQ1MTU0MWU1OSIsInVzZXJfaWQiOjV9.04l2kr7PdIzVZwc99uEGpcBGw_BKd-CA5P2vXw8jPZs	2022-12-03 05:45:52.439173+00	2022-12-04 05:45:52+00	5	4b3f8c0ffab54643905cdb5451541e59
103	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzMjc1MiwiaWF0IjoxNjcwMDQ2MzUyLCJqdGkiOiIyMGJlZGVjOGYxYzc0YjFmYWY2MjdkNDNkMWZjNDExMSIsInVzZXJfaWQiOjV9.yguuYpTxTVxK_H7njBa72Cfz7gttVMdE13jVUkRg0JI	2022-12-03 05:45:52.457062+00	2022-12-04 05:45:52+00	5	20bedec8f1c74b1faf627d43d1fc4111
104	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzMjg1MiwiaWF0IjoxNjcwMDQ2NDUyLCJqdGkiOiJkNzQwNGExYzkyMDY0ZjdhYWI4YWNkNTQ5NDZhZDgyNiIsInVzZXJfaWQiOjF9.g_pL0V7eOZxfpHLHjZg9CZmnTHbhNr1-n6S6x0oSJ_I	2022-12-03 05:47:32.840045+00	2022-12-04 05:47:32+00	1	d7404a1c92064f7aab8acd54946ad826
105	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzMjg1MiwiaWF0IjoxNjcwMDQ2NDUyLCJqdGkiOiIxZjZjNGQxOWFlYjU0MmFhYTUzMjdlODAxYzBkM2ZkMSIsInVzZXJfaWQiOjF9.smcR8Sf5jtqOyloIxHFkzPCWo0DvZyHaApEzxTfWPo0	2022-12-03 05:47:32.851002+00	2022-12-04 05:47:32+00	1	1f6c4d19aeb542aaa5327e801c0d3fd1
106	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNTA4OSwiaWF0IjoxNjcwMDQ4Njg5LCJqdGkiOiI4NGE4ZWZiZjQ5MWI0NTFjOTAzMWYyN2NhNDk3NGVhMCIsInVzZXJfaWQiOjN9.zZFENnNPhGfmsOFrRQSDuCes9LoFN2PInmZmMmyAFJQ	2022-12-03 06:24:49.916357+00	2022-12-04 06:24:49+00	3	84a8efbf491b451c9031f27ca4974ea0
107	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNTA4OSwiaWF0IjoxNjcwMDQ4Njg5LCJqdGkiOiI1MDZmOTNmYmUwMmQ0ODA5ODE0NWE3MmQ4NmUxNTZhOSIsInVzZXJfaWQiOjN9.kwFeLKLsUEsc2wW2hdHc_kGa4-u-Rsfm_tsIchIjQPw	2022-12-03 06:24:49.9314+00	2022-12-04 06:24:49+00	3	506f93fbe02d48098145a72d86e156a9
108	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNTE0NSwiaWF0IjoxNjcwMDQ4NzQ1LCJqdGkiOiJmYTMxM2U2MWUxMzI0MDhjYmM2NWU4OTQwMWJkYTcxZiIsInVzZXJfaWQiOjN9.gQn0mKsHSembjfcPBzCn5Fst4J3MtgTgma0Q1aPBScY	2022-12-03 06:25:45.640657+00	2022-12-04 06:25:45+00	3	fa313e61e132408cbc65e89401bda71f
109	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNTE0NSwiaWF0IjoxNjcwMDQ4NzQ1LCJqdGkiOiI3NDQ0MGI2ZWRlNGE0OWM4YjhhNjY3MDEzMjhkZGJlNiIsInVzZXJfaWQiOjN9.Der8Xv0yoJh2PhvKZTdDYuN87rLNXt3zxffGAxnnfgQ	2022-12-03 06:25:45.648521+00	2022-12-04 06:25:45+00	3	74440b6ede4a49c8b8a66701328ddbe6
110	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNTIzNSwiaWF0IjoxNjcwMDQ4ODM1LCJqdGkiOiJhOTJiYmVhMjFlNTQ0ZGYyOGEzMzYwMjA4YjJiZjQ3NCIsInVzZXJfaWQiOjh9.ZsZrOeLXn8s52Y2Z0CY5KyWQ48_vgSGwOhPcsnA0WMA	2022-12-03 06:27:15.837415+00	2022-12-04 06:27:15+00	8	a92bbea21e544df28a3360208b2bf474
111	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNTI0MCwiaWF0IjoxNjcwMDQ4ODQwLCJqdGkiOiJmZjg1ZThkNDExMzU0OTA4YWViM2E5MTFlOTNiYjdhNCIsInVzZXJfaWQiOjF9.BTLF-eFx5Q55pbQH6UQsWPx3BmD_HwVOwSabSL0AxQU	2022-12-03 06:27:20.757946+00	2022-12-04 06:27:20+00	1	ff85e8d411354908aeb3a911e93bb7a4
112	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNTI0MCwiaWF0IjoxNjcwMDQ4ODQwLCJqdGkiOiI1N2MzZmZhZDhjMzc0YzE5YTc1OGVkZWE1ODhmYmQxMiIsInVzZXJfaWQiOjF9.U-0mB8JUDyUrdKOXoeaVWtb1zWUIPyUdCYz1FW5obl4	2022-12-03 06:27:20.762381+00	2022-12-04 06:27:20+00	1	57c3ffad8c374c19a758edea588fbd12
113	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNTI5NiwiaWF0IjoxNjcwMDQ4ODk2LCJqdGkiOiJmOTliNTUyYmUwZDY0YjEyOGE2MDI0YzI0ZTNmYWJhYyIsInVzZXJfaWQiOjJ9.onI73CqxUCY4qURgS44hx_pqnjGRebuk0YCA2y2hFlw	2022-12-03 06:28:16.087368+00	2022-12-04 06:28:16+00	2	f99b552be0d64b128a6024c24e3fabac
114	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNTI5NiwiaWF0IjoxNjcwMDQ4ODk2LCJqdGkiOiJiNTk0NzgxYWI0OWU0ZWRlOWMxMGViMDg5ODE2NWUwMSIsInVzZXJfaWQiOjJ9.A7EAdPG_TD7mq4ttZYRZ2ycalX2Apg08znjEiBg5PRk	2022-12-03 06:28:16.099036+00	2022-12-04 06:28:16+00	2	b594781ab49e4ede9c10eb0898165e01
115	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNTMzNCwiaWF0IjoxNjcwMDQ4OTM0LCJqdGkiOiI0NjkyOGQyMTFlNzE0OGJlODlhNjVmNjVkYzQ0ODFiNSIsInVzZXJfaWQiOjF9.AgNEPAu_HqzYEfIpfZuzxNKrF69f7UYmlDIjM0FiiBA	2022-12-03 06:28:54.367726+00	2022-12-04 06:28:54+00	1	46928d211e7148be89a65f65dc4481b5
116	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNTMzNCwiaWF0IjoxNjcwMDQ4OTM0LCJqdGkiOiJlMzA3MTk5NDAyZTU0YjE4OTY5MjMwNDJiNTlhZDY0MiIsInVzZXJfaWQiOjF9.mtPfgTshjYAm1xKRtcRiut0uzUwOZmxRyzwj4qhfTlI	2022-12-03 06:28:54.373177+00	2022-12-04 06:28:54+00	1	e307199402e54b1896923042b59ad642
117	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNTM2MiwiaWF0IjoxNjcwMDQ4OTYyLCJqdGkiOiIxNDU2MTk0MzE0NTI0MjliYWVlMjQ5ZTZmZTc4ODBlNCIsInVzZXJfaWQiOjJ9.XNpoPzXWlRrtH8Hw7wl8-_16ELS1epzi69ZT05qnMg0	2022-12-03 06:29:22.052743+00	2022-12-04 06:29:22+00	2	145619431452429baee249e6fe7880e4
118	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNTM2MiwiaWF0IjoxNjcwMDQ4OTYyLCJqdGkiOiI1MTA3MzJhZGVjNzE0YTBjYjFiZTM2ZjZjYzg2YWNhZCIsInVzZXJfaWQiOjJ9.p4zVl2l-xdqLcsqCVQorMB6V2Tr6iUqpwUFvPrfME2o	2022-12-03 06:29:22.058709+00	2022-12-04 06:29:22+00	2	510732adec714a0cb1be36f6cc86acad
119	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNTM3MiwiaWF0IjoxNjcwMDQ4OTcyLCJqdGkiOiI1OThlMjFiMmJhYjA0ZjQ0OGY1YTE2ODRlOWNlMWFjMSIsInVzZXJfaWQiOjF9.FBaPe2k59sm6zk1yx1cb0xRrvxiOj-6e-N6BTUmQLmQ	2022-12-03 06:29:32.722987+00	2022-12-04 06:29:32+00	1	598e21b2bab04f448f5a1684e9ce1ac1
120	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNTM3MiwiaWF0IjoxNjcwMDQ4OTcyLCJqdGkiOiIyYWY0ZTU3OTljMWQ0NDdkYWU2MDY0ZjdlZmQ3NzQ2NCIsInVzZXJfaWQiOjF9.7QpKtO0UALCVyApwqqAIBXCJaxuZk4AMBj5oNGv-JfY	2022-12-03 06:29:32.728724+00	2022-12-04 06:29:32+00	1	2af4e5799c1d447dae6064f7efd77464
121	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNjAxNCwiaWF0IjoxNjcwMDQ5NjE0LCJqdGkiOiIzNWEzMjkzNTk2OTQ0ZWQxOGE3ZDE5Yjk2YWM3M2I0YiIsInVzZXJfaWQiOjN9.X6WErfAfKNRh8nG4Ysjj6UUvKnfUsqQo96okYEWrgeI	2022-12-03 06:40:14.756257+00	2022-12-04 06:40:14+00	3	35a3293596944ed18a7d19b96ac73b4b
122	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNjAxNCwiaWF0IjoxNjcwMDQ5NjE0LCJqdGkiOiJmY2M4YTY1MDZjZGU0N2Q1ODJlNmM0YzM5NTQ4NzcxYyIsInVzZXJfaWQiOjN9.upbuWz3u_ZiniWGjvECKlMZUSUUZdLhMyOWhbziLcMg	2022-12-03 06:40:14.767847+00	2022-12-04 06:40:14+00	3	fcc8a6506cde47d582e6c4c39548771c
123	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNzE1NCwiaWF0IjoxNjcwMDUwNzU0LCJqdGkiOiI4Y2E5MTdhY2NiYWU0OGJhYmI1ZmRkNGRiOWEwYTM2NSIsInVzZXJfaWQiOjF9.D9t1BsA5eyRPV-9ioSQeJlUex4p9LYPmoZTFu7L541E	2022-12-03 06:59:14.842762+00	2022-12-04 06:59:14+00	1	8ca917accbae48babb5fdd4db9a0a365
124	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNzE1NCwiaWF0IjoxNjcwMDUwNzU0LCJqdGkiOiJmZWJjMjViNDNiZGM0NmIwYjYxNThhM2Y5OTQ4NThjYyIsInVzZXJfaWQiOjF9.tvs6pU7RYtdleiwwIUrqNkxWNAsWPOz-EJPS1V-lG9Q	2022-12-03 06:59:14.851844+00	2022-12-04 06:59:14+00	1	febc25b43bdc46b0b6158a3f994858cc
125	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNzUxMiwiaWF0IjoxNjcwMDUxMTEyLCJqdGkiOiI2YWMxYTYzZTlmNmQ0ZjQyYjBkYTNjZTgyN2IzZmE3ZiIsInVzZXJfaWQiOjN9.7nH_cFPJH9KEXPYqa3bEwpnnXvuixTVkKXmT4mvrvCU	2022-12-03 07:05:12.154321+00	2022-12-04 07:05:12+00	3	6ac1a63e9f6d4f42b0da3ce827b3fa7f
126	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNzUxMiwiaWF0IjoxNjcwMDUxMTEyLCJqdGkiOiJjNjZkOTlhNzZkM2E0MTQxOWQ4NmVjZjkxYzllOGFlMyIsInVzZXJfaWQiOjN9.zGRK8pLNT_ujlFDUI4rAAzNSdV3Ua7eAxwv6NknAJpc	2022-12-03 07:05:12.164705+00	2022-12-04 07:05:12+00	3	c66d99a76d3a41419d86ecf91c9e8ae3
127	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNzkzMiwiaWF0IjoxNjcwMDUxNTMyLCJqdGkiOiJhMjY1YmIyNDIyYWI0YTZlODkwYTViZjU4ZjUzMjc0MyIsInVzZXJfaWQiOjV9.VFehRwS3yUs62OOGP2lFyBF917f2ZbJ3ry9gNny_CrA	2022-12-03 07:12:12.635819+00	2022-12-04 07:12:12+00	5	a265bb2422ab4a6e890a5bf58f532743
128	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNzkzMiwiaWF0IjoxNjcwMDUxNTMyLCJqdGkiOiI3MzAyNzdiZjE0YjQ0ODE4OTNkYTFmNzMyZDdhMmZkYSIsInVzZXJfaWQiOjV9.sGBmsP6nYwu8y--Tzp5YaLuk5JBJ_9086KkBSoX1HJE	2022-12-03 07:12:12.652173+00	2022-12-04 07:12:12+00	5	730277bf14b4481893da1f732d7a2fda
129	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNzk3OSwiaWF0IjoxNjcwMDUxNTc5LCJqdGkiOiI0NzMxNmNmYmMwZjk0MDRkODViMmRlZDg1MWJjMTExNCIsInVzZXJfaWQiOjV9.xrsjXCmrkAvVjNtOd-PKQTLRlFrXrZTvO9LJ_obmwHE	2022-12-03 07:12:59.556872+00	2022-12-04 07:12:59+00	5	47316cfbc0f9404d85b2ded851bc1114
130	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzNzk3OSwiaWF0IjoxNjcwMDUxNTc5LCJqdGkiOiJjOWI2NDE3MGNmMzU0MThjOTU4ODhkNjY2Y2VmYmM2MyIsInVzZXJfaWQiOjV9.tqTPdzttVOnOi5gmshx3UsfN_s6AvfTeYDYnvJQug9g	2022-12-03 07:12:59.566004+00	2022-12-04 07:12:59+00	5	c9b64170cf35418c95888d666cefbc63
131	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzODEwNywiaWF0IjoxNjcwMDUxNzA3LCJqdGkiOiI3NmJiYWYxYmNiNzQ0NGNjODI4OGYyMGY5NTg3OTkzZCIsInVzZXJfaWQiOjF9.nGdpZKpuojWCEQc4gimnbS5yTRc4Aw9d03fiOz7Mqw4	2022-12-03 07:15:07.685259+00	2022-12-04 07:15:07+00	1	76bbaf1bcb7444cc8288f20f9587993d
132	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzODEwNywiaWF0IjoxNjcwMDUxNzA3LCJqdGkiOiJmZGI0ZTRiZDk2ZTM0OWUyYjMzMjNkYzk3YTdkMzhmNSIsInVzZXJfaWQiOjF9.t90nsZBRjPi77yRquUciIdaX72nOX9U_wiNzx6gU0wY	2022-12-03 07:15:07.691369+00	2022-12-04 07:15:07+00	1	fdb4e4bd96e349e2b3323dc97a7d38f5
133	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzODc3MiwiaWF0IjoxNjcwMDUyMzcyLCJqdGkiOiI4ODIxYmY3ODY5YmY0NDYwOWY1ZDZjMGI1MzA2ODZhZiIsInVzZXJfaWQiOjF9.n6DIagJSLjPSEZBR-FF2sL7447g74JRoa0fee-A3TvI	2022-12-03 07:26:12.726095+00	2022-12-04 07:26:12+00	1	8821bf7869bf44609f5d6c0b530686af
134	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzODc3MiwiaWF0IjoxNjcwMDUyMzcyLCJqdGkiOiI0NTJiYjk3MTk1YzY0ZjNjOWZkNGI1NmVhY2NhMDBiNSIsInVzZXJfaWQiOjF9.uDsV5PYoXQMchRJ5CECht9WAfY483BpG56H4D8FidJM	2022-12-03 07:26:12.73395+00	2022-12-04 07:26:12+00	1	452bb97195c64f3c9fd4b56eacca00b5
135	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzOTg2NSwiaWF0IjoxNjcwMDUzNDY1LCJqdGkiOiJhZTc5Y2E2ZWZmM2M0N2RjYjM2Zjg0NDYwZmI4NGM1NyIsInVzZXJfaWQiOjV9.6fQWOceOC5vz6ddBBq67GhPqV6EvDJ0zsim-T-zh4jo	2022-12-03 07:44:25.30355+00	2022-12-04 07:44:25+00	5	ae79ca6eff3c47dcb36f84460fb84c57
136	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzOTg2NSwiaWF0IjoxNjcwMDUzNDY1LCJqdGkiOiI1NDRhY2VhODA4NDI0NzFhODNlNjkwMmE5MDgzZWEwZCIsInVzZXJfaWQiOjV9.2zbF8eCMm3-274xpLH_rrlYnyJtI5ACLtomfgOEwPeg	2022-12-03 07:44:25.438084+00	2022-12-04 07:44:25+00	5	544acea80842471a83e6902a9083ea0d
137	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzOTk1MywiaWF0IjoxNjcwMDUzNTUzLCJqdGkiOiJjMjU5M2FiZWM2MDk0YTNjOWEzMTIxOWQ0MDE4NjI2MiIsInVzZXJfaWQiOjF9.Y3VhxuuwFhyzclvYZ4PZZ44KqYkGADKrxuEvDs61hRU	2022-12-03 07:45:53.97238+00	2022-12-04 07:45:53+00	1	c2593abec6094a3c9a31219d40186262
138	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDEzOTk1MywiaWF0IjoxNjcwMDUzNTUzLCJqdGkiOiJhZTc3ODllYTllZGE0ZDc5OTU0ZTVhM2M5OWQ3YmZhOSIsInVzZXJfaWQiOjF9.siTj-47cpTeYPEsqjX29meshVan31o1YHTDmy4n7sLo	2022-12-03 07:45:53.98061+00	2022-12-04 07:45:53+00	1	ae7789ea9eda4d79954e5a3c99d7bfa9
139	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE0MTc5MSwiaWF0IjoxNjcwMDU1MzkxLCJqdGkiOiJmYmM1ZTg5NDJhMGQ0YWQ0ODBjZGIxMjcxY2IxMGQ2YiIsInVzZXJfaWQiOjV9.4jOLNPdl0vzEjCkD5rb0kG_AwcHoabmmuslMKka8PZ8	2022-12-03 08:16:31.061866+00	2022-12-04 08:16:31+00	5	fbc5e8942a0d4ad480cdb1271cb10d6b
140	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE0MTc5MSwiaWF0IjoxNjcwMDU1MzkxLCJqdGkiOiI3YjUxYzcxZDFiODQ0ODhlOTIzODNkYTJjZThjNjYxMCIsInVzZXJfaWQiOjV9.z_H3pTbvFBfZCtJpsfLqWdNSSIz7XPSA7KDgV9XLtjo	2022-12-03 08:16:31.088594+00	2022-12-04 08:16:31+00	5	7b51c71d1b84488e92383da2ce8c6610
141	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE0MTk1OSwiaWF0IjoxNjcwMDU1NTU5LCJqdGkiOiI3Mzc4YWM0ZTA3ZWM0YTdjYjgzZmJlMjk0Y2Y3ODNmNSIsInVzZXJfaWQiOjF9.2iagS-9Pat7FYx4HwUVZpGo-KTz6EG5d7wsj-cbjFIA	2022-12-03 08:19:19.206098+00	2022-12-04 08:19:19+00	1	7378ac4e07ec4a7cb83fbe294cf783f5
142	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE0MTk1OSwiaWF0IjoxNjcwMDU1NTU5LCJqdGkiOiI4ODliZjllMGJiZDg0NmYzYjcxYjA4YmExY2Y3NDdkMSIsInVzZXJfaWQiOjF9.cEwaAFfgEI2XBmpKOn67WpCsSG8NUO0jyPgkXQBDteY	2022-12-03 08:19:19.230618+00	2022-12-04 08:19:19+00	1	889bf9e0bbd846f3b71b08ba1cf747d1
143	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE0MjA1OSwiaWF0IjoxNjcwMDU1NjU5LCJqdGkiOiIwMWVlNzFjNTRiNGM0Zjk2OWYyZWE2YjRiMDdlZDkzMyIsInVzZXJfaWQiOjZ9.MXm5m0Xt4RP-ZHFXrpA7GOdlcU0mgii9jRdTnBB7i0Q	2022-12-03 08:20:59.831771+00	2022-12-04 08:20:59+00	6	01ee71c54b4c4f969f2ea6b4b07ed933
144	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE0MjA1OSwiaWF0IjoxNjcwMDU1NjU5LCJqdGkiOiI2N2NlYzRkZTBjNmM0ODBmOGRhODQ4ODM3NmRjMjUyNCIsInVzZXJfaWQiOjZ9.OUrbpBXv7r1l8_516hfkwkxlbErQ1PDstNV6T-T2DCA	2022-12-03 08:20:59.849314+00	2022-12-04 08:20:59+00	6	67cec4de0c6c480f8da8488376dc2524
145	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE0MjA4OSwiaWF0IjoxNjcwMDU1Njg5LCJqdGkiOiIwYmM1NjA1ODFhMWE0N2NmODU0NGExZDRiMDJjMzIxNSIsInVzZXJfaWQiOjV9.Z7WghvRg_bY6O1KhnZHCFL6ocF-RvLztPODsHNv9_2w	2022-12-03 08:21:29.849204+00	2022-12-04 08:21:29+00	5	0bc560581a1a47cf8544a1d4b02c3215
146	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE0MjA4OSwiaWF0IjoxNjcwMDU1Njg5LCJqdGkiOiJjOTU0NjQ1ZDZkYjk0Y2I5YjZlMWUzMDliMzExYjFjNCIsInVzZXJfaWQiOjV9.ca8g6AByXob7YM_o_9o7NSaYgnrepWYi5bJDtvw-zDk	2022-12-03 08:21:29.864531+00	2022-12-04 08:21:29+00	5	c954645d6db94cb9b6e1e309b311b1c4
147	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE0MjM3OSwiaWF0IjoxNjcwMDU1OTc5LCJqdGkiOiJlODVmM2E0MDFjYjM0MmJlYTBmOTA1Y2ViYWJiMTg1NiIsInVzZXJfaWQiOjF9.KvZlHwmbRUksk1-EfwVTHq_8nzFj8GhXHTmnIRS0P98	2022-12-03 08:26:19.523867+00	2022-12-04 08:26:19+00	1	e85f3a401cb342bea0f905cebabb1856
148	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE0MjM3OSwiaWF0IjoxNjcwMDU1OTc5LCJqdGkiOiIwNTViNWRkZjRhZjQ0OTNlOTY0Yjk1YjFhZjhiYTAzOSIsInVzZXJfaWQiOjF9.88pwnFe1L4pa8IdW40Swdg7I8hbwvN5ulU0oJq2GXXA	2022-12-03 08:26:19.532667+00	2022-12-04 08:26:19+00	1	055b5ddf4af4493e964b95b1af8ba039
149	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE0MjczNywiaWF0IjoxNjcwMDU2MzM3LCJqdGkiOiJkNjg3NjIyYWNkZGM0NmJmOWM2OTBmNzc5NDQ4YWY4OSIsInVzZXJfaWQiOjd9.3JQEoLkUZIBB5D0mdKBYS0aY2S70jUkVdocMM4tAgAI	2022-12-03 08:32:17.6425+00	2022-12-04 08:32:17+00	7	d687622acddc46bf9c690f779448af89
150	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE0MjczNywiaWF0IjoxNjcwMDU2MzM3LCJqdGkiOiIyYjM2NjU3YmRmMjA0YTJlOGY2YTUxNGFiOTQ1YzVlZSIsInVzZXJfaWQiOjd9.ruD8q82IKN1DJ3PgxndxkciFwqTNghS3-FH8cwpRd-M	2022-12-03 08:32:17.656945+00	2022-12-04 08:32:17+00	7	2b36657bdf204a2e8f6a514ab945c5ee
151	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE1NDQzNiwiaWF0IjoxNjcwMDY4MDM2LCJqdGkiOiI3NDY1OTJlMjcwYzM0NzgxOWQzZTlmMWM2NGY5NDM5NyIsInVzZXJfaWQiOjF9.7YwIlyOfunrlBkuUkNk4aAj3j9okggyfr_ZMsViIEoI	2022-12-03 11:47:16.654348+00	2022-12-04 11:47:16+00	1	746592e270c347819d3e9f1c64f94397
152	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE1NDQzNiwiaWF0IjoxNjcwMDY4MDM2LCJqdGkiOiJhM2M2MTcxNzdmOTU0ZjU1ODgxNGRjZTQzMjBkOWZlNyIsInVzZXJfaWQiOjF9.jZfNisEBNzJk9mFoNzSbCV9m7Lif07A8fB6Q9dyJnkU	2022-12-03 11:47:16.664126+00	2022-12-04 11:47:16+00	1	a3c617177f954f558814dce4320d9fe7
153	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE1NDU1MiwiaWF0IjoxNjcwMDY4MTUyLCJqdGkiOiIxMjMxNjg3MTQ4YTA0MTg2OGZlYjIxYzYzYjljYzIzYyIsInVzZXJfaWQiOjF9.MrEk4MRTzZyS-7YXsEg2xoobXIZ-ePk-H_c0ZowjhpY	2022-12-03 11:49:12.488066+00	2022-12-04 11:49:12+00	1	1231687148a041868feb21c63b9cc23c
154	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE1NDU1MiwiaWF0IjoxNjcwMDY4MTUyLCJqdGkiOiIwNTA4ZDk0OWNkYjA0OGY5OGY4Y2ZlYmFlMTk0MzkyOCIsInVzZXJfaWQiOjF9.gMCxsbZZE0yHOc8zwODH-DJvzviAOScJn2rg493iN_w	2022-12-03 11:49:12.498962+00	2022-12-04 11:49:12+00	1	0508d949cdb048f98f8cfebae1943928
155	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE1NDU2NSwiaWF0IjoxNjcwMDY4MTY1LCJqdGkiOiIyOTcwNjNlZTRhNjg0MzQ0ODkyNGM0YTc0NmVhZjdiMiIsInVzZXJfaWQiOjV9.sqEc6NgBj5HN9CvF87aKc2whki39_wapqIVI1bsuvPw	2022-12-03 11:49:25.118434+00	2022-12-04 11:49:25+00	5	297063ee4a6843448924c4a746eaf7b2
156	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE1NDU2NSwiaWF0IjoxNjcwMDY4MTY1LCJqdGkiOiJjYzczZWZiZjhiZTg0NGUyYmEyNWI4NTAzYTJmZmFmYyIsInVzZXJfaWQiOjV9.Mj2T9NIz7xBjmAome09SLt-swgNRA7a5ynBzjQKX8MI	2022-12-03 11:49:25.132602+00	2022-12-04 11:49:25+00	5	cc73efbf8be844e2ba25b8503a2ffafc
157	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE1NDY5MiwiaWF0IjoxNjcwMDY4MjkyLCJqdGkiOiI3YjMzYmVjOWM1MDE0YzU0YTc2NjAwNmQ2YWE4ZjA2ZSIsInVzZXJfaWQiOjF9.J8se-1VXEmNxOnN8X4f3DYumc4NyJfSwMw2dtH8vWYM	2022-12-03 11:51:32.054828+00	2022-12-04 11:51:32+00	1	7b33bec9c5014c54a766006d6aa8f06e
158	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE1NDY5MiwiaWF0IjoxNjcwMDY4MjkyLCJqdGkiOiIwYTEzZmQ4OTViMjU0MWM0YmIzOWEyZGE4MTYwY2U3ZSIsInVzZXJfaWQiOjF9.6_fUHFfky5KtPu9SqYidpjz1bpCw694GRSUXmuiyHkI	2022-12-03 11:51:32.064422+00	2022-12-04 11:51:32+00	1	0a13fd895b2541c4bb39a2da8160ce7e
159	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE3NDM1NywiaWF0IjoxNjcwMDg3OTU3LCJqdGkiOiI1Y2MzZDdkYzE1OGU0Mjc2YTM1ZTk1YzY3NjQ1Mjg2MSIsInVzZXJfaWQiOjF9.We_0vyfOp8bKGTxjANVHr9b3lHv39HR4UrrIy1B6DzI	2022-12-03 17:19:17.822092+00	2022-12-04 17:19:17+00	1	5cc3d7dc158e4276a35e95c676452861
160	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE3NDM1NywiaWF0IjoxNjcwMDg3OTU3LCJqdGkiOiIwNTgyYzQzYTgwODI0YjBlYjI5ZDAxYTM0YzI2ZjVmZiIsInVzZXJfaWQiOjF9.z-AaqZESDLqy1OhVmbHCB3JZr4cjqFcy0dWAWug3MvU	2022-12-03 17:19:17.83206+00	2022-12-04 17:19:17+00	1	0582c43a80824b0eb29d01a34c26f5ff
161	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE3NTk2MywiaWF0IjoxNjcwMDg5NTYzLCJqdGkiOiJhYTk1NTZlNjFkMGI0NzM4OGFjOGFkZmUyM2M4OGUxYiIsInVzZXJfaWQiOjV9.HWBxQRPApDTZTZG63xGJ66wLW0H5kbu0lKb35pilI74	2022-12-03 17:46:03.954028+00	2022-12-04 17:46:03+00	5	aa9556e61d0b47388ac8adfe23c88e1b
162	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE3NTk2MywiaWF0IjoxNjcwMDg5NTYzLCJqdGkiOiJlNWE5YjZhMGI2Mjk0NDM2OWNiZTY4ZDFhYTUzMTk2NCIsInVzZXJfaWQiOjV9.MyXXXh49PDj4A3ZVk856L674xK1iuFsG8HXY6ei8Aps	2022-12-03 17:46:03.962181+00	2022-12-04 17:46:03+00	5	e5a9b6a0b62944369cbe68d1aa531964
163	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE3NTk5MiwiaWF0IjoxNjcwMDg5NTkyLCJqdGkiOiJmMDgwZTI3ZGYzOGE0N2EwYWZlZWY5YzUwODUxOThkYyIsInVzZXJfaWQiOjV9.Usxfz1TYceizJUk5gK8WWjnhshlErfLPKM7oq4mmuUg	2022-12-03 17:46:32.293179+00	2022-12-04 17:46:32+00	5	f080e27df38a47a0afeef9c5085198dc
164	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE3NTk5MiwiaWF0IjoxNjcwMDg5NTkyLCJqdGkiOiIzZjliNzg1ZDhjNjE0YTc4YTIwZGIwNzMxMTIwMGUwMSIsInVzZXJfaWQiOjV9.gnLpHxa-w-UZIfJxnb7LQKplrRydSIR6G_MGpDk5Rkg	2022-12-03 17:46:32.310627+00	2022-12-04 17:46:32+00	5	3f9b785d8c614a78a20db07311200e01
165	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE3NjAwMiwiaWF0IjoxNjcwMDg5NjAyLCJqdGkiOiJiMjhmZTIyZmEwZjY0NzJjYjcwYjVlNjczM2E2NDU3MCIsInVzZXJfaWQiOjF9.mvQu5W6hxG7fDoL-W0fbuupUvVU8cYCCglDc9uaRmgA	2022-12-03 17:46:42.379919+00	2022-12-04 17:46:42+00	1	b28fe22fa0f6472cb70b5e6733a64570
166	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE3NjAwMiwiaWF0IjoxNjcwMDg5NjAyLCJqdGkiOiIwNjhjZjk2NzM2Mjc0NjcxODZlNTgwYjU5ZDRkNTRlNiIsInVzZXJfaWQiOjF9.gNDP4UpKJ5TDFAvRPPH-lvAKrR_Anr0IaixMCnbFOKs	2022-12-03 17:46:42.39438+00	2022-12-04 17:46:42+00	1	068cf9673627467186e580b59d4d54e6
167	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE3OTkyMSwiaWF0IjoxNjcwMDkzNTIxLCJqdGkiOiJhZWMwNjI5ZjkzY2Y0Y2M1YWUyMDNjNjY3OWUwMDdmZSIsInVzZXJfaWQiOjF9.Z-dfaAeVicEFxpFam0RHnxfgsvsYTzf13hBQ9L_XXxE	2022-12-03 18:52:01.77462+00	2022-12-04 18:52:01+00	1	aec0629f93cf4cc5ae203c6679e007fe
168	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE3OTkyMSwiaWF0IjoxNjcwMDkzNTIxLCJqdGkiOiIyZGJlNGMyMjZjOGU0NjQzYTM1ZTMyMGM3NzBhMjYzZiIsInVzZXJfaWQiOjF9.zCVHMcZm1_YYqC4F8JJNEzrWyuEK4PynOUBSi7o9TXo	2022-12-03 18:52:01.861666+00	2022-12-04 18:52:01+00	1	2dbe4c226c8e4643a35e320c770a263f
169	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE3OTkzMSwiaWF0IjoxNjcwMDkzNTMxLCJqdGkiOiI2ZjU2OTUxYmUzY2M0MzkxOTE3MDJiNGJkMTA1MDgzYiIsInVzZXJfaWQiOjZ9.RXnwypurTuMZiVHCiOAWXP7HTRaAWuecsIkQtOXC_mc	2022-12-03 18:52:11.297374+00	2022-12-04 18:52:11+00	6	6f56951be3cc439191702b4bd105083b
170	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDE3OTkzMSwiaWF0IjoxNjcwMDkzNTMxLCJqdGkiOiI4M2QxYzg0YzYyYWU0NzYwOTE0ODg5ZTdmNDI4OWNlMCIsInVzZXJfaWQiOjZ9.qhYLPAjGcAfXvNB-kTrxMES8qAcjggKJ98oaGAANC9A	2022-12-03 18:52:11.316513+00	2022-12-04 18:52:11+00	6	83d1c84c62ae4760914889e7f4289ce0
171	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIxMDg2MCwiaWF0IjoxNjcwMTI0NDYwLCJqdGkiOiJlY2UxZGM1Y2ZlMDE0Mjg2OWE5NmRjNWIzMjY1ZjgyNyIsInVzZXJfaWQiOjd9.wP4QeHbxEPO4uokSqvu_rqb2VDSEagWpUMpepUe9WUA	2022-12-04 03:27:40.032422+00	2022-12-05 03:27:40+00	7	ece1dc5cfe0142869a96dc5b3265f827
172	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIxMDg2MCwiaWF0IjoxNjcwMTI0NDYwLCJqdGkiOiJhOGM2ODc1NjAzZDA0ZTM1ODExOGQyYjZkYzQ2NTNiZCIsInVzZXJfaWQiOjd9.mHFOFOdFupgDKVbZo-FkmMuP6qvh0rjYlJsgXqnbhnM	2022-12-04 03:27:40.051419+00	2022-12-05 03:27:40+00	7	a8c6875603d04e358118d2b6dc4653bd
173	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIxMzg5NCwiaWF0IjoxNjcwMTI3NDk0LCJqdGkiOiJmM2NmNjVhODZjNjI0MTU1OGJjOWM0MzgwMjE2NjE4MSIsInVzZXJfaWQiOjl9.MEHQzzTMw8jOF56LcfQ0TMFvRraSD5sHkSPn2Oztj8c	2022-12-04 04:18:14.529904+00	2022-12-05 04:18:14+00	9	f3cf65a86c6241558bc9c43802166181
174	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIxMzkwMCwiaWF0IjoxNjcwMTI3NTAwLCJqdGkiOiJmOWU1OGRjZjIxMzY0NDRlODFhNDA5MzI5N2YyMjQxNiIsInVzZXJfaWQiOjl9.DKfyodQ77x6fKCGom9-yHH8LgZKxA3Ng5yXpUufye80	2022-12-04 04:18:20.082803+00	2022-12-05 04:18:20+00	9	f9e58dcf2136444e81a4093297f22416
175	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIxMzkwMCwiaWF0IjoxNjcwMTI3NTAwLCJqdGkiOiI1NzQ0OTU4NGE1MjI0YmFhOTk3MGE3N2FjZjU4Y2FkZCIsInVzZXJfaWQiOjl9.K8lPMs2Al7fJr4Y2G1G2mfsXA0_t_6p2PY6ZJDgUVRM	2022-12-04 04:18:20.092974+00	2022-12-05 04:18:20+00	9	57449584a5224baa9970a77acf58cadd
176	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIxOTUwOCwiaWF0IjoxNjcwMTMzMTA4LCJqdGkiOiI1YTkzMjBhNDc3YTA0NmFjYTg4MTIzMDIxM2Y2YWU5MSIsInVzZXJfaWQiOjV9.waAUvmtiv-BeQhIgMIZ3ngGvTsVtBhCooDKGmgdy4DU	2022-12-04 05:51:48.627314+00	2022-12-05 05:51:48+00	5	5a9320a477a046aca881230213f6ae91
177	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIxOTUwOCwiaWF0IjoxNjcwMTMzMTA4LCJqdGkiOiJlYjg4MGQwZjE5ZDg0NzFjYjRhYTc1YTY3NWY0YWUxZiIsInVzZXJfaWQiOjV9.--yFRzUAjMVeI6lvlkRx0mi0y6am2tPIZgspt3E4RBQ	2022-12-04 05:51:48.645109+00	2022-12-05 05:51:48+00	5	eb880d0f19d8471cb4aa75a675f4ae1f
178	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIxOTcyMiwiaWF0IjoxNjcwMTMzMzIyLCJqdGkiOiJhYjZmNzg4ODA5NjM0ZDRlOWI4MjNlOTQxZGE5MjdiOCIsInVzZXJfaWQiOjZ9.0Nh-B5CG4tDpDnQRCviM5A2VtX2_NgBzM7hctvaOBP4	2022-12-04 05:55:22.695348+00	2022-12-05 05:55:22+00	6	ab6f788809634d4e9b823e941da927b8
179	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIxOTcyMiwiaWF0IjoxNjcwMTMzMzIyLCJqdGkiOiI4YzIyMjkyMzVlNTM0MzQ3Yjg1YjQ3OGE3ZDlhZWU2MSIsInVzZXJfaWQiOjZ9.1m0M3pD1xepyC3y7EWhqW7zBp36x7iF3X_ZXHxbR0cQ	2022-12-04 05:55:22.705134+00	2022-12-05 05:55:22+00	6	8c2229235e534347b85b478a7d9aee61
180	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIyMTczMSwiaWF0IjoxNjcwMTM1MzMxLCJqdGkiOiJkNzZmMDUyZWJkNjY0YTVhOTE5OGRhYmMxMzc0ZDNiNyIsInVzZXJfaWQiOjZ9.Or-48mVHunRszzh63H4hi7HD8W0IeZCVJtnqGk_joEU	2022-12-04 06:28:51.451809+00	2022-12-05 06:28:51+00	6	d76f052ebd664a5a9198dabc1374d3b7
181	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIyMTczMSwiaWF0IjoxNjcwMTM1MzMxLCJqdGkiOiI3ZmQ5YmE1MmMyZGY0ZTVmOWVjYjYyMmE2NmM5OWQ5NiIsInVzZXJfaWQiOjZ9.oawMLe2PO6be9RGmsmugT74zSXI4Q3YIrunEapMJ0TM	2022-12-04 06:28:51.46646+00	2022-12-05 06:28:51+00	6	7fd9ba52c2df4e5f9ecb622a66c99d96
182	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIyODY3MiwiaWF0IjoxNjcwMTQyMjcyLCJqdGkiOiJjNDk3YzFmYmQ5NzE0NDlhOWQ3NTczZmFkOGJkZTBiZCIsInVzZXJfaWQiOjF9.P70hcVV7LofcqRJeNWUy0PcnRysS7gohNu1Qd2zBxzM	2022-12-04 08:24:32.051272+00	2022-12-05 08:24:32+00	1	c497c1fbd971449a9d7573fad8bde0bd
183	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIyODY3MiwiaWF0IjoxNjcwMTQyMjcyLCJqdGkiOiJkMWQ0NmJiZTY5MjI0ZGYxYTVlNjYxMDliZWM3YzM5YyIsInVzZXJfaWQiOjF9.eyx4euYXS1Z1EFAUtTOY8-WUmbgksS4FKIe2yxFOqlQ	2022-12-04 08:24:32.060679+00	2022-12-05 08:24:32+00	1	d1d46bbe69224df1a5e66109bec7c39c
184	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIyOTEyNywiaWF0IjoxNjcwMTQyNzI3LCJqdGkiOiI4MDZkYjdjNWNlZjU0NjJhODA3YmFlZDQzZmRiYWJmNiIsInVzZXJfaWQiOjF9.w6ExUAqT6rj8VPafyZH1X7BhvdncqJH2XoMiAqf5aoU	2022-12-04 08:32:07.234051+00	2022-12-05 08:32:07+00	1	806db7c5cef5462a807baed43fdbabf6
185	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIyOTEyNywiaWF0IjoxNjcwMTQyNzI3LCJqdGkiOiI3NTlmMmU2MDZhZmY0ZTM1YjM5NWNiYjVmODg3YzU4ZSIsInVzZXJfaWQiOjF9.7Qx_PXnJb8LoHlzLwPs6G37MaOUSqFhi5q5KtyDp3b0	2022-12-04 08:32:07.251801+00	2022-12-05 08:32:07+00	1	759f2e606aff4e35b395cbb5f887c58e
186	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIyOTY0MSwiaWF0IjoxNjcwMTQzMjQxLCJqdGkiOiIxZGZjNDUyOWY2MmM0MjMyYmZkNmI0NzRhYWU4MDU1NCIsInVzZXJfaWQiOjl9.ucFOVNXZxjW1xcN-9YYvW9cbVh9MceKMgva6rEjK5Tg	2022-12-04 08:40:41.583828+00	2022-12-05 08:40:41+00	9	1dfc4529f62c4232bfd6b474aae80554
187	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIyOTY0MSwiaWF0IjoxNjcwMTQzMjQxLCJqdGkiOiJlY2RmYTdhYmM5ZWI0OGRlYTdhYjY1ZmQwM2UzMmY3MiIsInVzZXJfaWQiOjl9.MVuqa2gDDcKb-e4SFQzce6sjwJ5Dya9GcowXcGyqubY	2022-12-04 08:40:41.593557+00	2022-12-05 08:40:41+00	9	ecdfa7abc9eb48dea7ab65fd03e32f72
188	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIyOTg4MCwiaWF0IjoxNjcwMTQzNDgwLCJqdGkiOiI1YjU0OTFkOGE2ZDc0ZGViODhkZTEyOGIyN2MwMGM0YSIsInVzZXJfaWQiOjZ9.9qTHufZKuWg1fpvg2cBbMOFCaEByjZZJdnMGFOGdO3E	2022-12-04 08:44:40.968466+00	2022-12-05 08:44:40+00	6	5b5491d8a6d74deb88de128b27c00c4a
189	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIyOTg4MSwiaWF0IjoxNjcwMTQzNDgxLCJqdGkiOiIxNzE2OTUxYjhjNTM0NzVkODg4ZjU4MTIzYjU3YmFlZCIsInVzZXJfaWQiOjZ9.AlmuiIDMLt4UNB18XCD_DbLEH3RY5xKc3JWqjx31A4U	2022-12-04 08:44:41.005559+00	2022-12-05 08:44:41+00	6	1716951b8c53475d888f58123b57baed
190	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIyOTkyNSwiaWF0IjoxNjcwMTQzNTI1LCJqdGkiOiIzZDFmN2IxZTk5NTI0MzEwOWY3YzZhN2IxY2M2MGEyNiIsInVzZXJfaWQiOjZ9.KIi_G0tdUNGsHheqsdvUVh-a8Joof6YMe_dhm08F8FE	2022-12-04 08:45:25.715997+00	2022-12-05 08:45:25+00	6	3d1f7b1e995243109f7c6a7b1cc60a26
191	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIyOTkyNSwiaWF0IjoxNjcwMTQzNTI1LCJqdGkiOiI5ZTJlNDkwNThkNzI0N2JjOWQwZDhjYWQyNWMwODcyOCIsInVzZXJfaWQiOjZ9.NqeCfvcbRqiTAl8BW2k2w89OWCquzRnhmt4o_hDezT0	2022-12-04 08:45:25.726932+00	2022-12-05 08:45:25+00	6	9e2e49058d7247bc9d0d8cad25c08728
192	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzMDMwOCwiaWF0IjoxNjcwMTQzOTA4LCJqdGkiOiIzNGRiZjE3OTU2Yzg0YTMwYjZhNDBhYzc1ZjNjNzljZiIsInVzZXJfaWQiOjF9.ky-Pz05KX53TEU88IqBQFIqh2mRNHoWvEiwR2MsB8mg	2022-12-04 08:51:48.615956+00	2022-12-05 08:51:48+00	1	34dbf17956c84a30b6a40ac75f3c79cf
193	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzMDMwOCwiaWF0IjoxNjcwMTQzOTA4LCJqdGkiOiI5MjA5NTQ1ZDI4M2U0YzgzYTBlNDk3YmFmNjZkMGU4YiIsInVzZXJfaWQiOjF9.QyzbbGk1-W9MyllGunyYWPNrfJ9NUHHXT-n9tYhuW3s	2022-12-04 08:51:48.6312+00	2022-12-05 08:51:48+00	1	9209545d283e4c83a0e497baf66d0e8b
194	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzMDQ0MSwiaWF0IjoxNjcwMTQ0MDQxLCJqdGkiOiI3YzM4YTE1ODJlNzM0ZDQ3YWUwMTU5MDZkNjY3ZWI2NyIsInVzZXJfaWQiOjV9.A895D8qMiAKbF_ZGnGMA6CkEZdiZNnC4UX1AHyrA4vw	2022-12-04 08:54:01.718972+00	2022-12-05 08:54:01+00	5	7c38a1582e734d47ae015906d667eb67
195	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzMDQ0MSwiaWF0IjoxNjcwMTQ0MDQxLCJqdGkiOiJjMGIzZjQ5YjdlMzA0ZjAxYTljMDgyMDdmYTAzMzVkOSIsInVzZXJfaWQiOjV9.14EtV0ti0b8vS1aM5ARNvO-UkohltLrm5-D3YUhSapk	2022-12-04 08:54:01.729343+00	2022-12-05 08:54:01+00	5	c0b3f49b7e304f01a9c08207fa0335d9
196	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzMDY5MywiaWF0IjoxNjcwMTQ0MjkzLCJqdGkiOiIwZmI4ZTA1OWZhYWY0ZWE2OGZkNTQ0NWQwZGI5ZmU4ZCIsInVzZXJfaWQiOjV9.jKKTKWnIHjCOJPn9IQNzO61_G3DKG3BVkms5PG9SYUk	2022-12-04 08:58:13.233367+00	2022-12-05 08:58:13+00	5	0fb8e059faaf4ea68fd5445d0db9fe8d
197	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzMDY5MywiaWF0IjoxNjcwMTQ0MjkzLCJqdGkiOiJiMmFkOTg3Zjg5MDQ0NWEzYTQ2YWU0OTNiYTExNDI0NSIsInVzZXJfaWQiOjV9.SRF1FJ-SMrYPxmApcRigcd46l9bFrg5s7SFWKUIcp4I	2022-12-04 08:58:13.248803+00	2022-12-05 08:58:13+00	5	b2ad987f890445a3a46ae493ba114245
198	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzMDg0NSwiaWF0IjoxNjcwMTQ0NDQ1LCJqdGkiOiI4Y2FiOTNiNWQ2YmI0YWI2YmQ4MGIyMzFlNGIwNDkxMSIsInVzZXJfaWQiOjZ9.mT6nZMqEhBZQhMyiF-j-cEjtW-7ddL9PEqWiStMs918	2022-12-04 09:00:45.459008+00	2022-12-05 09:00:45+00	6	8cab93b5d6bb4ab6bd80b231e4b04911
199	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzMDg0NSwiaWF0IjoxNjcwMTQ0NDQ1LCJqdGkiOiJmZDI4MjEyMTI3NTk0M2ZmOWVkMTk3ZGU2NmMxZjM2NSIsInVzZXJfaWQiOjZ9.9O6E_g6Jk21zkiojzDv6ZhRIeVNmQYYgZX8YVdiR3WI	2022-12-04 09:00:45.469096+00	2022-12-05 09:00:45+00	6	fd282121275943ff9ed197de66c1f365
200	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzMDg2MCwiaWF0IjoxNjcwMTQ0NDYwLCJqdGkiOiI3NWZlMDgxMGFhYmY0MTk5ODI2YjIyYTY0MmQyMzczMiIsInVzZXJfaWQiOjV9.VFfhNBcqBnNQwh1-1Y-4ddcsttcVopYL-Cs-7c-x4mo	2022-12-04 09:01:00.046476+00	2022-12-05 09:01:00+00	5	75fe0810aabf4199826b22a642d23732
201	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzMDg2MCwiaWF0IjoxNjcwMTQ0NDYwLCJqdGkiOiI5OWZjYTZhNmU5ZGE0YzkxYTAzNjM1ZjI1MzZkOTczOSIsInVzZXJfaWQiOjV9.jK92Y4fnH_7k1D8T9-WH1nmdQEfLlNX1H8f0PvuNufg	2022-12-04 09:01:00.057112+00	2022-12-05 09:01:00+00	5	99fca6a6e9da4c91a03635f2536d9739
202	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzMDkxMSwiaWF0IjoxNjcwMTQ0NTExLCJqdGkiOiI2ZTg2NWI3NjUxZDg0Yjk1YWY2NjRhOTJlYTc2YmE2ZSIsInVzZXJfaWQiOjZ9.k3BCey33WU0XXl08VLyIM9vzPf6wvYDuWuzBNl8VB7U	2022-12-04 09:01:51.772596+00	2022-12-05 09:01:51+00	6	6e865b7651d84b95af664a92ea76ba6e
203	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzMDkxMSwiaWF0IjoxNjcwMTQ0NTExLCJqdGkiOiI4NjA4MTk5YWY1MTI0MWIwOGRlMmExOTM0YmZjMTdjOSIsInVzZXJfaWQiOjZ9.To68IaFeD8T85PPLon8jQePkMX3G-01yS2ZKTsftnNM	2022-12-04 09:01:51.781498+00	2022-12-05 09:01:51+00	6	8608199af51241b08de2a1934bfc17c9
204	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzMDkzNCwiaWF0IjoxNjcwMTQ0NTM0LCJqdGkiOiI0MzdjMzEyYTZjY2U0MDU3ODM4ZGFhMjY2OTljNWIyZiIsInVzZXJfaWQiOjZ9.tdtgEQAGXCGak3Mc9pR6EgzWWJzLwnDHrwAl6Olos6M	2022-12-04 09:02:14.693614+00	2022-12-05 09:02:14+00	6	437c312a6cce4057838daa26699c5b2f
205	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzMDkzNCwiaWF0IjoxNjcwMTQ0NTM0LCJqdGkiOiI3YTUwMTBjMTAwNmI0ZjY5YTdlYTVlZjBkOGRlNTE0MiIsInVzZXJfaWQiOjZ9.QOq2FKTjhb_pWBBdqQWfZlyg8YBtFO2FlC-tDt-feco	2022-12-04 09:02:14.708517+00	2022-12-05 09:02:14+00	6	7a5010c1006b4f69a7ea5ef0d8de5142
206	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzOTY2OCwiaWF0IjoxNjcwMTUzMjY4LCJqdGkiOiJmMjcyOTZkYzVlOTk0ZjZmODZiZGY3NTRmNDdkZThiMiIsInVzZXJfaWQiOjEwfQ.CuT91LS8c0oPoqDoI-NAlUkmtFdtxoylpnEIU4CIjMU	2022-12-04 11:27:48.699773+00	2022-12-05 11:27:48+00	10	f27296dc5e994f6f86bdf754f47de8b2
207	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzOTcxOCwiaWF0IjoxNjcwMTUzMzE4LCJqdGkiOiI3MTg0OTViNjhkMzA0OTZjOWY2MzFmYzFjM2JmYjlkZSIsInVzZXJfaWQiOjF9.c9R052PQ3CfR3wX8NLXaxHW-E-M2QEkyvV86A_ZBWbY	2022-12-04 11:28:38.562192+00	2022-12-05 11:28:38+00	1	718495b68d30496c9f631fc1c3bfb9de
208	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIzOTcxOCwiaWF0IjoxNjcwMTUzMzE4LCJqdGkiOiJmYTRhMzFiNzAwMjg0ZGJjYTQwZmU0OTgzMmJjZGZiNCIsInVzZXJfaWQiOjF9.Cj7qzV1uG7u-eRbW5gGj7hPSfZkn-NR2uLvvs_HC_6w	2022-12-04 11:28:38.57019+00	2022-12-05 11:28:38+00	1	fa4a31b700284dbca40fe49832bcdfb4
209	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDA3NywiaWF0IjoxNjcwMTUzNjc3LCJqdGkiOiI1OTRlY2I2NDVhMzg0MDY3ODIyNDBhMDA3ZjJlZDJmNSIsInVzZXJfaWQiOjF9.HcFvlRbYiWtQ3JOQicv87bGOoohQzZ_pHN5_LcW8tZ4	2022-12-04 11:34:37.646231+00	2022-12-05 11:34:37+00	1	594ecb645a38406782240a007f2ed2f5
210	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDA3NywiaWF0IjoxNjcwMTUzNjc3LCJqdGkiOiJlZDlhMWMzYWQzNTc0N2NjYjg4ZTJiMjJiOTQxZDI1YiIsInVzZXJfaWQiOjF9.be9M0qnERQpfj5mSFzZ_KbLK3BI59pSrUlFQ4pNW67w	2022-12-04 11:34:37.659288+00	2022-12-05 11:34:37+00	1	ed9a1c3ad35747ccb88e2b22b941d25b
211	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDIxOSwiaWF0IjoxNjcwMTUzODE5LCJqdGkiOiI0MTlhYTVmN2EyYzM0MWQxYmZjMjcwYzg0OTlhMGZkNiIsInVzZXJfaWQiOjF9.wx1XSX3eZaOVlY2o9UG09HY8x_y3D3NGsSpYGww6o7I	2022-12-04 11:36:59.890418+00	2022-12-05 11:36:59+00	1	419aa5f7a2c341d1bfc270c8499a0fd6
212	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDIxOSwiaWF0IjoxNjcwMTUzODE5LCJqdGkiOiI2ZmUyNWNkN2ExNGQ0MzM4YjgzNTJmNzkxY2Q0ZTI0NiIsInVzZXJfaWQiOjF9.R49-vGcl4KUx8P1JxFw5tcKYzxkXgrGLqA41zUCcGxs	2022-12-04 11:36:59.901695+00	2022-12-05 11:36:59+00	1	6fe25cd7a14d4338b8352f791cd4e246
213	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDM3NCwiaWF0IjoxNjcwMTUzOTc0LCJqdGkiOiI4NzljYzVmNjBlZDM0YTUxOTA4ZTRkZGVjNWY4ZDExNSIsInVzZXJfaWQiOjV9.MDDtXGcXfnI3nHxRduHkOAQPCwWnIvt-WuPKyJJFMxI	2022-12-04 11:39:34.46095+00	2022-12-05 11:39:34+00	5	879cc5f60ed34a51908e4ddec5f8d115
214	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDM3NCwiaWF0IjoxNjcwMTUzOTc0LCJqdGkiOiI1NGQ5ZGE5MzAzZDM0ZmRiYjg4NzFjNjUzYjQwZWU0ZiIsInVzZXJfaWQiOjV9.H0bH8Sux7yxhYKQs_KJYJbePixuiDqYcFKOvnFud57A	2022-12-04 11:39:34.477284+00	2022-12-05 11:39:34+00	5	54d9da9303d34fdbb8871c653b40ee4f
215	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDM4OCwiaWF0IjoxNjcwMTUzOTg4LCJqdGkiOiI2YTVlYWM1MGE2OWE0NjZhOTBmYmUxNjY2YzQ3OTA5ZCIsInVzZXJfaWQiOjF9.1DfQPMrbyxtbzLfm9--XuzRzuSa5OvLURd4MXKAkfsE	2022-12-04 11:39:48.251293+00	2022-12-05 11:39:48+00	1	6a5eac50a69a466a90fbe1666c47909d
216	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDM4OCwiaWF0IjoxNjcwMTUzOTg4LCJqdGkiOiIzMGVhMWViNzBmN2E0YzllOWNhNDIzZTI3OTI0NTI3NCIsInVzZXJfaWQiOjF9.phsYpIbgEL0XrIHi06j2ivklWX1fO5IfcWL_uxENZUo	2022-12-04 11:39:48.268258+00	2022-12-05 11:39:48+00	1	30ea1eb70f7a4c9e9ca423e279245274
217	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDQ2MCwiaWF0IjoxNjcwMTU0MDYwLCJqdGkiOiIyNjQ3M2M3OTg5ZjI0ZTdlOTgxMWQyOGEzODkxYTNlYyIsInVzZXJfaWQiOjF9.TV5cG3XH2wZo928NyOVFIeRNT7312LOihwvX8_b4xWg	2022-12-04 11:41:00.110882+00	2022-12-05 11:41:00+00	1	26473c7989f24e7e9811d28a3891a3ec
218	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDQ2MCwiaWF0IjoxNjcwMTU0MDYwLCJqdGkiOiI5N2M0Y2U1ZjYxNDU0ZjM4YjFhMDI3ZGM1MmJjYjUwMiIsInVzZXJfaWQiOjF9.OwgL6mVYH3hTztyDemxHw6xuBDo_vEowClb8zrAteeg	2022-12-04 11:41:00.12545+00	2022-12-05 11:41:00+00	1	97c4ce5f61454f38b1a027dc52bcb502
219	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDQ5MywiaWF0IjoxNjcwMTU0MDkzLCJqdGkiOiIwZDE0YzcxZmY2OTQ0ZWQ3YjA5ZjA2OWY3MWU3NGU5YiIsInVzZXJfaWQiOjEwfQ.4kCPdN9H_DG_Rma5Fq-cBmxejPNxRi0Ithv6eJ-aVlE	2022-12-04 11:41:33.797147+00	2022-12-05 11:41:33+00	10	0d14c71ff6944ed7b09f069f71e74e9b
220	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDQ5MywiaWF0IjoxNjcwMTU0MDkzLCJqdGkiOiJjNzBiY2I3OWEyNjA0ZGZiYTc5NzgzMGJlMTJjYjZhYyIsInVzZXJfaWQiOjEwfQ._mRb830PAL7sfMDDtxgMJaMYkNMYgVNT5y-dcMzDPIc	2022-12-04 11:41:33.804138+00	2022-12-05 11:41:33+00	10	c70bcb79a2604dfba797830be12cb6ac
221	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDg2MywiaWF0IjoxNjcwMTU0NDYzLCJqdGkiOiJiYjAzZjVmMjc4M2M0OTJjYWYxMmNkMDQxZTQzMTY0YiIsInVzZXJfaWQiOjV9.M-5cVTAwGt7W1RQ1N0CW9l-8xV9EVweplhO-LWek_pM	2022-12-04 11:47:43.19103+00	2022-12-05 11:47:43+00	5	bb03f5f2783c492caf12cd041e43164b
222	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDg2MywiaWF0IjoxNjcwMTU0NDYzLCJqdGkiOiJhZDRkOWVlYzhhZGY0Zjg2YWRkNzRlYmViZDhjNTQzYSIsInVzZXJfaWQiOjV9.QHVGEoKRkDJqZjMc5CniG-KeXWRDwdww1QyWMODZ-PI	2022-12-04 11:47:43.228185+00	2022-12-05 11:47:43+00	5	ad4d9eec8adf4f86add74ebebd8c543a
223	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDg5NCwiaWF0IjoxNjcwMTU0NDk0LCJqdGkiOiJkMGIxYzMyOTNmMWQ0ZDRlOWVkMGM3NjkxZTAzZWI1NSIsInVzZXJfaWQiOjZ9.kPHt_-iKtnq1O0mG7HSNSBTQ6ReBvJJOZi2LYPV7xYc	2022-12-04 11:48:14.145179+00	2022-12-05 11:48:14+00	6	d0b1c3293f1d4d4e9ed0c7691e03eb55
224	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDg5NCwiaWF0IjoxNjcwMTU0NDk0LCJqdGkiOiI1MGE0NjI4NjVmMTE0MDhhYTAwYWQxYTljMGM4MjA1NSIsInVzZXJfaWQiOjZ9.mzNNCB3stIiNDlUubKwWym2wjfJ0WYnBmCg8wK4DF8U	2022-12-04 11:48:14.158564+00	2022-12-05 11:48:14+00	6	50a462865f11408aa00ad1a9c0c82055
225	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDkxMSwiaWF0IjoxNjcwMTU0NTExLCJqdGkiOiIwZDg5NTQ3NzY3MTQ0Yjc2ODUxODZhNzAzMzliNDIyYyIsInVzZXJfaWQiOjV9.Y1TFMpRfTf5nuMzB43NBh28gxmIw5RqcPiiMiOs5inQ	2022-12-04 11:48:31.202401+00	2022-12-05 11:48:31+00	5	0d89547767144b7685186a70339b422c
226	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MDkxMSwiaWF0IjoxNjcwMTU0NTExLCJqdGkiOiI2ZGU3ZDcxMDE5NjU0MDQ4ODUxYWUwNTZhYmFjNTk3ZiIsInVzZXJfaWQiOjV9.AxzOEHWLTSLHGiBxtolzoFg1mcbZN6HS9VH_mBCCWPI	2022-12-04 11:48:31.21793+00	2022-12-05 11:48:31+00	5	6de7d71019654048851ae056abac597f
227	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MTQzNCwiaWF0IjoxNjcwMTU1MDM0LCJqdGkiOiJiNGI5NTUxOTU1YTA0YjVkOWUxNjJlNDAzYWE0OTEyMSIsInVzZXJfaWQiOjV9.PMqpjVL6vfYnOjHM9vWvQ3PCy7NUqYg5unSHVzivNxA	2022-12-04 11:57:14.016184+00	2022-12-05 11:57:14+00	5	b4b9551955a04b5d9e162e403aa49121
228	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MTQzNCwiaWF0IjoxNjcwMTU1MDM0LCJqdGkiOiIyNGM2YWVkYTA4OTU0YTVjYjJmMDc1ZjNmMmJjNTk1NiIsInVzZXJfaWQiOjV9.KLlY5t8ZdpHY8Y-eoA8t0Dy-FbUx57hstA3WclyPvQM	2022-12-04 11:57:14.02697+00	2022-12-05 11:57:14+00	5	24c6aeda08954a5cb2f075f3f2bc5956
229	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MTYwMywiaWF0IjoxNjcwMTU1MjAzLCJqdGkiOiI4Y2U3ODc0MjYwNGY0NzhhYjYwNTg2NTlkNTU5YWYxMSIsInVzZXJfaWQiOjZ9.bZP7TYYuxuyY2FI3rWTNZOGDIE5A_mpiLVwkOQI-tQM	2022-12-04 12:00:03.216005+00	2022-12-05 12:00:03+00	6	8ce78742604f478ab6058659d559af11
230	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MTYwMywiaWF0IjoxNjcwMTU1MjAzLCJqdGkiOiJkNWU5NGIyMjM5MTI0OWI5YmM5ZTY1NzIxZDQxN2RlNyIsInVzZXJfaWQiOjZ9.oNmKMpUT6tb6QKbyRAUs7KcMRajcb7xK0dZpJohaDTM	2022-12-04 12:00:03.223046+00	2022-12-05 12:00:03+00	6	d5e94b22391249b9bc9e65721d417de7
231	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MTYzMiwiaWF0IjoxNjcwMTU1MjMyLCJqdGkiOiI0NjRiOWZjODQ5NTQ0NTRmYmYxYjdhMmY3YmMwYmNhNiIsInVzZXJfaWQiOjZ9.r4z0sHq4rwg8I0w79Wn2gdZzSzPnrMxajMTOepovdTo	2022-12-04 12:00:32.523651+00	2022-12-05 12:00:32+00	6	464b9fc84954454fbf1b7a2f7bc0bca6
232	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MTYzMiwiaWF0IjoxNjcwMTU1MjMyLCJqdGkiOiI2ODJiZmE0ZTAzMjg0MGZmODEyOGE4YWZkMWJkNzJhNSIsInVzZXJfaWQiOjZ9.AWWfHZgvAKLFyn1Nj8EWgtI4X-etpl3rH2es0eGVBKs	2022-12-04 12:00:32.529713+00	2022-12-05 12:00:32+00	6	682bfa4e032840ff8128a8afd1bd72a5
233	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MTc5NywiaWF0IjoxNjcwMTU1Mzk3LCJqdGkiOiIyNzhiN2RmNjhhYTk0ZDIxYWQ3NDllNGVlN2U2NjZhNiIsInVzZXJfaWQiOjV9.qAGxXTlnDBLp6vOHUFHkvFqeQGKKOeL_scSLLHdNiiI	2022-12-04 12:03:17.481865+00	2022-12-05 12:03:17+00	5	278b7df68aa94d21ad749e4ee7e666a6
234	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MTc5NywiaWF0IjoxNjcwMTU1Mzk3LCJqdGkiOiJmOTVlM2YzNDA2NmQ0ZTVhOTU2YWFlZjg3YWJhOWU2OSIsInVzZXJfaWQiOjV9.5y5utASGJGxreN4Hqg-wUtEErV7uBQqRQHvSH-Z-y_Y	2022-12-04 12:03:17.495543+00	2022-12-05 12:03:17+00	5	f95e3f34066d4e5a956aaef87aba9e69
235	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MTkxNSwiaWF0IjoxNjcwMTU1NTE1LCJqdGkiOiJjZGFmYzczZWNjYTk0NWUxOTg2ZDhhMzc5YWVhNjRlNCIsInVzZXJfaWQiOjF9.n6NHn8jRmva-sbwhIPzP8QLSmRG00a1NkLYuKb7JqYQ	2022-12-04 12:05:15.618536+00	2022-12-05 12:05:15+00	1	cdafc73ecca945e1986d8a379aea64e4
236	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI0MTkxNSwiaWF0IjoxNjcwMTU1NTE1LCJqdGkiOiI0NDgxYzRlYzgzNTA0YjAzYTExMjliYzE0YzNmYmZhNSIsInVzZXJfaWQiOjF9.PIOMmLdtNtqur9eCqqVzZPBOn9-ZGprZqW2SW-jNcHs	2022-12-04 12:05:15.628224+00	2022-12-05 12:05:15+00	1	4481c4ec83504b03a1129bc14c3fbfa5
237	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI1MTA4NywiaWF0IjoxNjcwMTY0Njg3LCJqdGkiOiJmNWM0OWY5YjU2MTc0MTZkODliMDk3OGUzOGU0NjJiOSIsInVzZXJfaWQiOjF9.Vx84Jx1vO0aJUKMipdZANxpDvsBdB2PCTVyoT9esxqM	2022-12-04 14:38:07.395323+00	2022-12-05 14:38:07+00	1	f5c49f9b5617416d89b0978e38e462b9
238	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDI1MTA4NywiaWF0IjoxNjcwMTY0Njg3LCJqdGkiOiJmZjA4YmEyZWY2NTQ0YzdlYTJjNmU3NGNlM2I1YWFjNSIsInVzZXJfaWQiOjF9.mKXXHyiXHUsNPTPKoKjutGWfgblgmVOYZ9P540HQa1o	2022-12-04 14:38:07.584568+00	2022-12-05 14:38:07+00	1	ff08ba2ef6544c7ea2c6e74ce3b5aac5
239	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDMwMjY1OSwiaWF0IjoxNjcwMjE2MjU5LCJqdGkiOiI0OTBiMmYyY2I2NmU0MTFmOTRkNThjMDAyNDk0ZTZjYyIsInVzZXJfaWQiOjZ9.hz0X1WYZxjEIypbjsw72PiMVe7oT2J3cpoa4jkmwBcI	2022-12-05 04:57:39.161979+00	2022-12-06 04:57:39+00	6	490b2f2cb66e411f94d58c002494e6cc
240	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDMwMjY1OSwiaWF0IjoxNjcwMjE2MjU5LCJqdGkiOiIxODA1Nzc3MjYwZjY0NDA5OWMzMmM4ODMxNzY2ZjA5NSIsInVzZXJfaWQiOjZ9.WgEn0CMdefunW1Y8IQazeZI1Yv7DQKoqICHCHENf5hc	2022-12-05 04:57:39.178686+00	2022-12-06 04:57:39+00	6	1805777260f644099c32c8831766f095
241	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDMwNzgyMywiaWF0IjoxNjcwMjIxNDIzLCJqdGkiOiIyMDBlYzhmOTgyNDA0MzVmOTBmN2Q1NTVhN2FhMmUwMiIsInVzZXJfaWQiOjd9.ZAx7q6z3039GnErqkHzS0KUCeJl8CX6V4tt2I4mMJnk	2022-12-05 06:23:43.340058+00	2022-12-06 06:23:43+00	7	200ec8f98240435f90f7d555a7aa2e02
242	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDMwNzgyMywiaWF0IjoxNjcwMjIxNDIzLCJqdGkiOiIyMjllNWU4MWI3Zjc0ZGVjODM3NmZhNWJkOTZhMzAwZiIsInVzZXJfaWQiOjd9.30o1feS10ZkBBZoGrcHBg1g9kuEk8bXBNuXKufa8hZY	2022-12-05 06:23:43.357578+00	2022-12-06 06:23:43+00	7	229e5e81b7f74dec8376fa5bd96a300f
243	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDMzMDg2OCwiaWF0IjoxNjcwMjQ0NDY4LCJqdGkiOiI4MGY3MDg3NDBjYTA0MWEyOWI2YjU3YjA5NTM0MTUzOSIsInVzZXJfaWQiOjZ9.LtLRKi4FzQarZR0l5bs2gr20ONHPXRsLsoBV1W1-4Xs	2022-12-05 12:47:48.206402+00	2022-12-06 12:47:48+00	6	80f708740ca041a29b6b57b095341539
244	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDMzMDg2OCwiaWF0IjoxNjcwMjQ0NDY4LCJqdGkiOiI5YzM3NzVjZTExNmY0NWZkYWM0NzljYWQyYzcyMDNmZSIsInVzZXJfaWQiOjZ9.TkQDuUoKHy7wva34-Pild-mPnSA4MbkJ8_fmnm8kUyA	2022-12-05 12:47:48.218472+00	2022-12-06 12:47:48+00	6	9c3775ce116f45fdac479cad2c7203fe
245	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM0MTIzNywiaWF0IjoxNjcwMjU0ODM3LCJqdGkiOiI2ZWQ0NGVkZTVjNjM0ZjljOGY5NDNjM2ZlYjg3NDBkNiIsInVzZXJfaWQiOjV9.y9q5zCMfIQqlx0sqyuL8MAV5i2EwrajXl2OmRny-Xmw	2022-12-05 15:40:37.606797+00	2022-12-06 15:40:37+00	5	6ed44ede5c634f9c8f943c3feb8740d6
246	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM0MTIzNywiaWF0IjoxNjcwMjU0ODM3LCJqdGkiOiJjYTlkMWVkZGY3Yzg0N2M1OTVjYzY2ZDFkZWVlZDgyYyIsInVzZXJfaWQiOjV9.j3sXgwm2Juk9_doiORSsvww8AqyoORkvswjTKKjTPec	2022-12-05 15:40:37.62555+00	2022-12-06 15:40:37+00	5	ca9d1eddf7c847c595cc66d1deeed82c
247	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM0MTI3NCwiaWF0IjoxNjcwMjU0ODc0LCJqdGkiOiI2MzA1MjJkZmY4NGI0YTQ2YTk4MDhkOTFhNTU4OTVjZCIsInVzZXJfaWQiOjZ9.aJWgAl9qpVVpCg781OPhDS6hXFtPz0WDRym_CuN7F_U	2022-12-05 15:41:14.499102+00	2022-12-06 15:41:14+00	6	630522dff84b4a46a9808d91a55895cd
248	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM0MTI3NCwiaWF0IjoxNjcwMjU0ODc0LCJqdGkiOiJkYzc4NWZiZjNjMWY0YzcyOGZhZTliNTA4YTE3NmM5ZSIsInVzZXJfaWQiOjZ9.YgLZCWLZeJWmrkphYjb--wdnIxt9u2Q-sH5YOhkr7ww	2022-12-05 15:41:14.517617+00	2022-12-06 15:41:14+00	6	dc785fbf3c1f4c728fae9b508a176c9e
249	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM0ODcxMiwiaWF0IjoxNjcwMjYyMzEyLCJqdGkiOiIzMGU0YmFhZDVlNWE0ODdiYTdmZTBiMTNkZmYzMWQ4MSIsInVzZXJfaWQiOjZ9.TIE92B1ktOrHsl0dfSvNPiTvf5ZnP_fkmIw_Eb6x8ZE	2022-12-05 17:45:12.993644+00	2022-12-06 17:45:12+00	6	30e4baad5e5a487ba7fe0b13dff31d81
250	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM0ODcxMywiaWF0IjoxNjcwMjYyMzEzLCJqdGkiOiI0YTM4YTMwZjM5YjE0MDJiYjY2ZThlYzI1ODlhZjFlZCIsInVzZXJfaWQiOjZ9.y0soeR-ExcfQ3t6jdKBJAFioN4eaHhHozscp_dOtQ10	2022-12-05 17:45:13.016856+00	2022-12-06 17:45:13+00	6	4a38a30f39b1402bb66e8ec2589af1ed
251	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM1MDY2NiwiaWF0IjoxNjcwMjY0MjY2LCJqdGkiOiJlNmY2M2QxZTk2Yzc0ZGIwYTJmZjYxZmI1NjNjZmMyMCIsInVzZXJfaWQiOjV9.gYax7MbGtLOfCE62ItoC5aseIgayMUk8SxevCP68BPk	2022-12-05 18:17:46.72757+00	2022-12-06 18:17:46+00	5	e6f63d1e96c74db0a2ff61fb563cfc20
252	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM1MDY2NiwiaWF0IjoxNjcwMjY0MjY2LCJqdGkiOiI1OTcxZmUyNDU0Zjg0ZjFkYjY1YzIwODVkYjAzMjllYiIsInVzZXJfaWQiOjV9.7wU9-JzMaZLivojBN8UdfG8QZmPA4v4gt8zGxBfwo_8	2022-12-05 18:17:46.735483+00	2022-12-06 18:17:46+00	5	5971fe2454f84f1db65c2085db0329eb
253	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM1MDY5MSwiaWF0IjoxNjcwMjY0MjkxLCJqdGkiOiI1OGEzNGM1MThkMDc0NWEyYTlhNDU1NjA4ZWI0YmU4MyIsInVzZXJfaWQiOjZ9.ryna9pJngGMqlM6KEt0BdRHT4DMHi45U8ZmaUkeO7UU	2022-12-05 18:18:11.680605+00	2022-12-06 18:18:11+00	6	58a34c518d0745a2a9a455608eb4be83
254	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM1MDY5MSwiaWF0IjoxNjcwMjY0MjkxLCJqdGkiOiI1NTRjYmUyYjlhN2Q0ZGEwYmY3ZDBmZjA0MzY4MmQ5YSIsInVzZXJfaWQiOjZ9.r9j-J3WwC7pWELqlBc_np5DOMQvsf3Sm5E83yIhy4UY	2022-12-05 18:18:11.688776+00	2022-12-06 18:18:11+00	6	554cbe2b9a7d4da0bf7d0ff043682d9a
255	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM1MTYzMiwiaWF0IjoxNjcwMjY1MjMyLCJqdGkiOiI0YTRmMzgwM2I2Mjk0ODIwYmU0MjkzMTk0YTVkOWNlNiIsInVzZXJfaWQiOjV9.Wqipv8uMJ_uTr4ltjMjEbrzJReuDP_1ZiHUwgbUvraE	2022-12-05 18:33:52.70483+00	2022-12-06 18:33:52+00	5	4a4f3803b6294820be4293194a5d9ce6
256	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM1MTYzMiwiaWF0IjoxNjcwMjY1MjMyLCJqdGkiOiIwOTcwNThkNzgzZDI0MzMwYmNiMjBhMmJmY2M0NTczNiIsInVzZXJfaWQiOjV9.vhcokzO4WuTz8UPRl1cTXAYJo4bZGlQLS0IK3xJe38w	2022-12-05 18:33:52.720418+00	2022-12-06 18:33:52+00	5	097058d783d24330bcb20a2bfcc45736
257	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM1MTY0OSwiaWF0IjoxNjcwMjY1MjQ5LCJqdGkiOiI1NmQyYjMwOWRiZTI0M2I3OTcwYmUyOGM0NmIxY2E3NyIsInVzZXJfaWQiOjV9.fyxJswWTX3-M31eFItUp8iiHiMxV6cqE8E-v1mAYHxA	2022-12-05 18:34:09.730794+00	2022-12-06 18:34:09+00	5	56d2b309dbe243b7970be28c46b1ca77
258	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM1MTY0OSwiaWF0IjoxNjcwMjY1MjQ5LCJqdGkiOiI2ZjAxMjU2MGEyOTE0MTNjYjYyMWM2NjU3ODhmZTU3NSIsInVzZXJfaWQiOjV9.3ExnA024sLdpWYj3DM-ie22pzn-jE4MEBbt725CiWW0	2022-12-05 18:34:09.741296+00	2022-12-06 18:34:09+00	5	6f012560a291413cb621c665788fe575
259	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM1MTY1NiwiaWF0IjoxNjcwMjY1MjU2LCJqdGkiOiI1Y2Q5ZmJmY2MxNTI0MDAzYjdhYTI2YTU2OWI3YWY2YyIsInVzZXJfaWQiOjZ9.2BDobfDLHi81QYRSjgXoqecUwRTKL2fIBNY_WGjgsBI	2022-12-05 18:34:16.536754+00	2022-12-06 18:34:16+00	6	5cd9fbfcc1524003b7aa26a569b7af6c
260	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM1MTY1NiwiaWF0IjoxNjcwMjY1MjU2LCJqdGkiOiJlMmFlMmJlYzliMTg0ZmRkODA0YzBiNDc1YjFkNWM0NyIsInVzZXJfaWQiOjZ9.drBPNFlZ6bOWWc278i9pP73yVwUuC0uAgSv2tjbTP7Y	2022-12-05 18:34:16.549039+00	2022-12-06 18:34:16+00	6	e2ae2bec9b184fdd804c0b475b1d5c47
261	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM4NTkxMywiaWF0IjoxNjcwMjk5NTEzLCJqdGkiOiJkZTYwYjk0NTBhMjI0MmE4OTQyODNjMmQ3YTgzNmJiYiIsInVzZXJfaWQiOjd9.bTLeHzwx7hmoUleNAh6xOKvEVXvFMIxudpTZe94Xe74	2022-12-06 04:05:13.975736+00	2022-12-07 04:05:13+00	7	de60b9450a2242a894283c2d7a836bbb
262	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM4NTkxMywiaWF0IjoxNjcwMjk5NTEzLCJqdGkiOiIxNmJjNDFiNjRkYTY0Y2EyODQ0OWNkYThiZGViY2Y4NyIsInVzZXJfaWQiOjd9.etOHkAuPRoHgYMgArJFOyKxDmGkT_A4jzWOHeMkW8o0	2022-12-06 04:05:13.992385+00	2022-12-07 04:05:13+00	7	16bc41b64da64ca28449cda8bdebcf87
263	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM5NzE3MywiaWF0IjoxNjcwMzEwNzczLCJqdGkiOiIyYmQ0ZDdhMzE0ODA0YzA3Yjg0YmQwMzNiNjY5ZDg5ZiIsInVzZXJfaWQiOjZ9.mUpy7rW8nTXlPYelxN2Kxq88fhlVjTX9RXS-izkBPQo	2022-12-06 07:12:53.754229+00	2022-12-07 07:12:53+00	6	2bd4d7a314804c07b84bd033b669d89f
264	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM5NzE3MywiaWF0IjoxNjcwMzEwNzczLCJqdGkiOiJhZTk2MjFiMzY1NTc0N2VlYTJiZGIzYWM0YWE5YjI5ZiIsInVzZXJfaWQiOjZ9.xee7mlnWLNZhGMnE0RjdAsNgoS3aohJ-fftHm5zemmU	2022-12-06 07:12:53.771551+00	2022-12-07 07:12:53+00	6	ae9621b3655747eea2bdb3ac4aa9b29f
265	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM5OTIwMywiaWF0IjoxNjcwMzEyODAzLCJqdGkiOiI3ZTZiODM1ZmNlNjg0YzFjOGVlNmRlYzhkNmEzZDg4ZCIsInVzZXJfaWQiOjl9.PDMeuJ3q3Af-z7bAI5-Ewj0bwmcKHZDmaLCpWAFZBBA	2022-12-06 07:46:43.523516+00	2022-12-07 07:46:43+00	9	7e6b835fce684c1c8ee6dec8d6a3d88d
266	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM5OTIwMywiaWF0IjoxNjcwMzEyODAzLCJqdGkiOiIyZTNmNmRmMzcxNzY0M2RmYWJiMWRjZWNlMmE4ODgxMyIsInVzZXJfaWQiOjl9.NrwIBx-HFl3tHVO4YnhMAVswwqmkkv_INrqJgFdhDDY	2022-12-06 07:46:43.536296+00	2022-12-07 07:46:43+00	9	2e3f6df3717643dfabb1dcece2a88813
267	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM5OTI4OSwiaWF0IjoxNjcwMzEyODg5LCJqdGkiOiI0YmZkMjU2NmFlMzA0MGM2YmNjYzZmNTA4ZDk0MjQ5YyIsInVzZXJfaWQiOjV9.D5lMgzkbmlqZfrNQwWtwJv9BaxYp5ybmVm9d2dtPZOg	2022-12-06 07:48:09.192813+00	2022-12-07 07:48:09+00	5	4bfd2566ae3040c6bccc6f508d94249c
268	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM5OTI4OSwiaWF0IjoxNjcwMzEyODg5LCJqdGkiOiJiZDBlODJkOWUwMzY0NTdhOTRhNThjNTQ3YWIwZGM0MyIsInVzZXJfaWQiOjV9.BrErdyTcgUHQercYgh14wqD-_vq-YL4Tze40-b5e9VM	2022-12-06 07:48:09.201158+00	2022-12-07 07:48:09+00	5	bd0e82d9e036457a94a58c547ab0dc43
269	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM5OTMxOCwiaWF0IjoxNjcwMzEyOTE4LCJqdGkiOiJkYTg4NDUwOWM4MDA0YjdmOWU3MDAxZmNjNTlkMjFlMyIsInVzZXJfaWQiOjZ9._lwcuvpKUfsltbBpF9oeIBrdMHgBHh4rT04KG0F8qyc	2022-12-06 07:48:38.602429+00	2022-12-07 07:48:38+00	6	da884509c8004b7f9e7001fcc59d21e3
270	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDM5OTMxOCwiaWF0IjoxNjcwMzEyOTE4LCJqdGkiOiIzNGY3ZTQ3NGY0MzU0MDEyODIxNGZhNzY1YWRlZDlhZiIsInVzZXJfaWQiOjZ9.0FoAJY_VhUaGiDtNTImXuA16aZ2H5ow_OLkT1qdzPXE	2022-12-06 07:48:38.611992+00	2022-12-07 07:48:38+00	6	34f7e474f43540128214fa765aded9af
271	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQwMTY2MywiaWF0IjoxNjcwMzE1MjYzLCJqdGkiOiJlYjcyNzBiNzgxMjY0ZTljYjMyMmFiZDE5N2ZkYzBkZCIsInVzZXJfaWQiOjZ9.A4yzJeDU1BkeN8ptddoWxC5O-ccg-GAeLFVAnIHr4s8	2022-12-06 08:27:43.452407+00	2022-12-07 08:27:43+00	6	eb7270b781264e9cb322abd197fdc0dd
272	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQwMTY2MywiaWF0IjoxNjcwMzE1MjYzLCJqdGkiOiJlNWMzNTg1NGVkYjU0ZmFiOTg0Nzk0MDBmNWVlYjM3MyIsInVzZXJfaWQiOjZ9.mY3AbEtbblLFFxYMxmMuwjlSapD4FtHYF0DLAV5MsTU	2022-12-06 08:27:43.46357+00	2022-12-07 08:27:43+00	6	e5c35854edb54fab98479400f5eeb373
273	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQwNjc2NSwiaWF0IjoxNjcwMzIwMzY1LCJqdGkiOiJkNDA1M2M2MWNiZTg0Njg3OGY2ZDA0ZjM3MzI2MWE2NyIsInVzZXJfaWQiOjl9.odRXV18za5VjjBvpiC6xY7eFopVraNx-Ss5VvbB-GWo	2022-12-06 09:52:45.317181+00	2022-12-07 09:52:45+00	9	d4053c61cbe846878f6d04f373261a67
274	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQwNjc2NSwiaWF0IjoxNjcwMzIwMzY1LCJqdGkiOiI5M2M2MzE3NmZkNjE0MjJjYmQ3NGYyNzQ4NzYxYmI3ZCIsInVzZXJfaWQiOjl9.PWZXFLlejoSf1wN0EqopK4R8fRaR7g8MPb6HOriXXYg	2022-12-06 09:52:45.325743+00	2022-12-07 09:52:45+00	9	93c63176fd61422cbd74f2748761bb7d
275	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQwNjg0OSwiaWF0IjoxNjcwMzIwNDQ5LCJqdGkiOiIwNzc0MDNjZDM3Yzk0MGEyYTJiZGMwZWZkMWE3YTIyNCIsInVzZXJfaWQiOjV9.yEf3AB7xYND3AZe56jxvDr6i3e2spp3ivtXnP-OLBG8	2022-12-06 09:54:09.947206+00	2022-12-07 09:54:09+00	5	077403cd37c940a2a2bdc0efd1a7a224
276	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQwNjg0OSwiaWF0IjoxNjcwMzIwNDQ5LCJqdGkiOiI3NGM3ZTdhMzExMDQ0OWRjOTVkZjZlMjZhMzY0MDE1ZSIsInVzZXJfaWQiOjV9.6ie2jJPBEGTNkd_UiVsl2frMwqwb8AmG79MuFgP2mcw	2022-12-06 09:54:09.954615+00	2022-12-07 09:54:09+00	5	74c7e7a3110449dc95df6e26a364015e
277	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQwNzA2NywiaWF0IjoxNjcwMzIwNjY3LCJqdGkiOiIzZjZiNmIxZDQwOGU0ZmExYTY3OWYyYTA4YmI4Yzc2ZiIsInVzZXJfaWQiOjZ9.GVCMFFk1q_uUWf7rGTvkLLEx_ThtcaIxqoiaR3gSR2Y	2022-12-06 09:57:47.570612+00	2022-12-07 09:57:47+00	6	3f6b6b1d408e4fa1a679f2a08bb8c76f
278	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQwNzA2NywiaWF0IjoxNjcwMzIwNjY3LCJqdGkiOiI1NzhlZTgxNDBlYzQ0ZGI4YjZhYzMyYzY1NjVmYTM5ZSIsInVzZXJfaWQiOjZ9.UZDekaZLmEYzg28U4Q_sOxrJcXYIaPUuR6i-7HAD8oY	2022-12-06 09:57:47.579726+00	2022-12-07 09:57:47+00	6	578ee8140ec44db8b6ac32c6565fa39e
279	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQwNzIwNSwiaWF0IjoxNjcwMzIwODA1LCJqdGkiOiIyYWM1YTJiNDgyZGI0ZDlhODhkMWU5MGRmMDY4NjhiYSIsInVzZXJfaWQiOjF9.dFqjDQ3Ce4Ti20VGTxBVFxgY4uDC0cQ_QD6nkyGrYfk	2022-12-06 10:00:05.862808+00	2022-12-07 10:00:05+00	1	2ac5a2b482db4d9a88d1e90df06868ba
280	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQwNzIwNSwiaWF0IjoxNjcwMzIwODA1LCJqdGkiOiJkN2QxOGM1NzIyMGU0MGFmOTkzZmI2ZWU2NmI2NTMxOCIsInVzZXJfaWQiOjF9.5P83Js8dlT6o_BF-PotK5cWODx1YSyc7-oq4KNTKIU4	2022-12-06 10:00:05.872821+00	2022-12-07 10:00:05+00	1	d7d18c57220e40af993fb6ee66b65318
281	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQwOTE2OCwiaWF0IjoxNjcwMzIyNzY4LCJqdGkiOiJjYzk2NmJlYWQwOWY0ZWI4OGFkYjA0Y2VmMDczYTc5YyIsInVzZXJfaWQiOjV9.Je79MnfU0NISwsWy8YIxsiTgGljlM71UETko9PW3vTk	2022-12-06 10:32:48.014501+00	2022-12-07 10:32:48+00	5	cc966bead09f4eb88adb04cef073a79c
282	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQwOTE2OCwiaWF0IjoxNjcwMzIyNzY4LCJqdGkiOiI4NmNmM2Q4YTRjYjg0MzI0OGQ0MDUzYWQyMjQyNzdkNCIsInVzZXJfaWQiOjV9.4WVoNUmTuif02OZka8yfj6WzbYMgodpqso_m8iYDZ10	2022-12-06 10:32:48.024679+00	2022-12-07 10:32:48+00	5	86cf3d8a4cb843248d4053ad224277d4
283	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQwOTIyOSwiaWF0IjoxNjcwMzIyODI5LCJqdGkiOiI2MjlkODcwM2JlZTg0YTZlOTg5MmZmYTg1MjExYjNhNiIsInVzZXJfaWQiOjZ9.Z1MHz7WFq7I8uEdF0zdBHBFqTlT0dTXpIPwOdvahp4g	2022-12-06 10:33:49.764741+00	2022-12-07 10:33:49+00	6	629d8703bee84a6e9892ffa85211b3a6
284	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQwOTIyOSwiaWF0IjoxNjcwMzIyODI5LCJqdGkiOiI5OTNkYWNiMmUzMzU0MTdjOTFkNDI3YjJkOTBmNDQ1YiIsInVzZXJfaWQiOjZ9.RFlMbUtWJZd89xcTUC-IOMnnqrbhiDpfDlwu5h1xCao	2022-12-06 10:33:49.773172+00	2022-12-07 10:33:49+00	6	993dacb2e335417c91d427b2d90f445b
285	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQxNjIyMSwiaWF0IjoxNjcwMzI5ODIxLCJqdGkiOiI1OTdmMjRlZjQ0OWY0ODM2YWZmZWY5YjU1MDg4MDFlYyIsInVzZXJfaWQiOjZ9.OIwS4kuY-6Kp5ZCqSw1fxZtSQpUUDBTUUfSxbMadxSw	2022-12-06 12:30:21.625228+00	2022-12-07 12:30:21+00	6	597f24ef449f4836affef9b5508801ec
286	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQxNjIyMSwiaWF0IjoxNjcwMzI5ODIxLCJqdGkiOiIyNzVhZTI0NjE5MTQ0MWRmYWJjNDgyNGU5MjAzNjVkZSIsInVzZXJfaWQiOjZ9.0QuS5d741ACmg-SuWtiADKQQWvXY1PXwYuyth2KJrwA	2022-12-06 12:30:21.645972+00	2022-12-07 12:30:21+00	6	275ae246191441dfabc4824e920365de
287	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQxNjMwNywiaWF0IjoxNjcwMzI5OTA3LCJqdGkiOiI1YjMzM2ZmZmZiMDg0NjZjOGRjYjRkMTNkN2M2ZjRmOSIsInVzZXJfaWQiOjZ9.XMmA1vOnSjbbUh6FXpwh4zMW6yZvaATA3xcfa2SHwIE	2022-12-06 12:31:47.120854+00	2022-12-07 12:31:47+00	6	5b333ffffb08466c8dcb4d13d7c6f4f9
288	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQxNjMwNywiaWF0IjoxNjcwMzI5OTA3LCJqdGkiOiI4NTZkOGNkMWUzY2E0MWUyYTc2ZDU3OTg1ZmIwODU1OCIsInVzZXJfaWQiOjZ9.AE_ccCSwOrUmUWsIZZTyABj6rcE_9cenpJ_7Rexwje0	2022-12-06 12:31:47.13634+00	2022-12-07 12:31:47+00	6	856d8cd1e3ca41e2a76d57985fb08558
289	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQxNjc2MywiaWF0IjoxNjcwMzMwMzYzLCJqdGkiOiI2MmIxM2QwOTQ4MGY0Nzg0OTk3NmRiMmI1YTQwZTkzMSIsInVzZXJfaWQiOjZ9.0T7dAKxOhty9Xlw3VPD6HpLOrSgM4vW62bDdwGYyExU	2022-12-06 12:39:23.214162+00	2022-12-07 12:39:23+00	6	62b13d09480f47849976db2b5a40e931
290	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQxNjc2MywiaWF0IjoxNjcwMzMwMzYzLCJqdGkiOiIyOTNiMWM3NjVkNWQ0MjgwOTFmYWFjMjJkNjIxYjRmOCIsInVzZXJfaWQiOjZ9.tpIfyT5npiCP63UNF95SE71x9qW85goWlBPZ1ziLgC0	2022-12-06 12:39:23.223136+00	2022-12-07 12:39:23+00	6	293b1c765d5d428091faac22d621b4f8
291	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQyMTEwNiwiaWF0IjoxNjcwMzM0NzA2LCJqdGkiOiI4MjVhZDczYjgzOWQ0ODJkYTVlZTk3OWJmYzIwMTJmMSIsInVzZXJfaWQiOjZ9.I983yjDYPZGJjSJV4x-7ktyViPCSw6PoC886Yd4FSUo	2022-12-06 13:51:46.843339+00	2022-12-07 13:51:46+00	6	825ad73b839d482da5ee979bfc2012f1
292	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQyMTEwNiwiaWF0IjoxNjcwMzM0NzA2LCJqdGkiOiJkOGZiOTI0ZWFiNzI0YTdjYTgxNDYzNjA0OGM0MDY1OSIsInVzZXJfaWQiOjZ9.Rv8Vl5kCtoR3kzNqdm0stHpHy86gbYHw7BhXjeo95rQ	2022-12-06 13:51:46.880297+00	2022-12-07 13:51:46+00	6	d8fb924eab724a7ca814636048c40659
293	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQzMDc0MSwiaWF0IjoxNjcwMzQ0MzQxLCJqdGkiOiJkMzNjY2JlODQ1OTQ0ZDUwOTk5NTNmYjgxNmQwYmE0MyIsInVzZXJfaWQiOjZ9.jbC0gZDhgL-2Zc6VnZ9ESI0yL2yK28v-dD4X7gKjdPE	2022-12-06 16:32:21.57877+00	2022-12-07 16:32:21+00	6	d33ccbe845944d5099953fb816d0ba43
294	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQzMDc0MSwiaWF0IjoxNjcwMzQ0MzQxLCJqdGkiOiIxZjVhNjgyMjUwOTM0ZTAyYTA0NzhkNzM4YjdhMWU3ZiIsInVzZXJfaWQiOjZ9.1ZfFL_IuN_8e0pIcxSovkaji8o6CWlqNbbtc1rK_VeY	2022-12-06 16:32:21.597089+00	2022-12-07 16:32:21+00	6	1f5a682250934e02a0478d738b7a1e7f
295	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQzOTgyMywiaWF0IjoxNjcwMzUzNDIzLCJqdGkiOiIxNjUxYTlkZjJkN2Q0MWEwOGU3MWE3MDM4OGRhYTVkMiIsInVzZXJfaWQiOjV9.82juhj8QMQjkXBaRY1XfMef94DYBoPFcdTn5hCJxQZs	2022-12-06 19:03:43.538353+00	2022-12-07 19:03:43+00	5	1651a9df2d7d41a08e71a70388daa5d2
296	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQzOTgyMywiaWF0IjoxNjcwMzUzNDIzLCJqdGkiOiJlNzYxMDc1YWQwM2Y0YjM4ODE1OWViMTRjZjRiMWI2MiIsInVzZXJfaWQiOjV9.SeY6DpdXqCBqw8DvfE5je1G2-fHhRKFQ4jMddlGIWng	2022-12-06 19:03:43.548171+00	2022-12-07 19:03:43+00	5	e761075ad03f4b388159eb14cf4b1b62
297	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQzOTg2MSwiaWF0IjoxNjcwMzUzNDYxLCJqdGkiOiIyODc5ZmFlMjFiMTY0NjVhOWJiNGQ5YmQ2OTRkZWMxZiIsInVzZXJfaWQiOjZ9.4GmE9FJB1T8CGJ1gzpVYCHXj3xQZ_isTBd5V6vedsWs	2022-12-06 19:04:21.206777+00	2022-12-07 19:04:21+00	6	2879fae21b16465a9bb4d9bd694dec1f
298	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQzOTg2MSwiaWF0IjoxNjcwMzUzNDYxLCJqdGkiOiJhMGVkMDhmNzE2OWQ0ZDAzYjc1OGNiY2ZiZTE3ZjUwNCIsInVzZXJfaWQiOjZ9.ppjNCg55u9Hvub5Lk2f-p2vJ1GmMXUqE0DiuU8romvY	2022-12-06 19:04:21.220768+00	2022-12-07 19:04:21+00	6	a0ed08f7169d4d03b758cbcfbe17f504
299	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQzOTg5OCwiaWF0IjoxNjcwMzUzNDk4LCJqdGkiOiJjNDRkNDllOGYzM2Y0NmEyOGVjYTRhYTZkZDFiMzAxMSIsInVzZXJfaWQiOjV9.-enGYCvkyzI29VQAaSCD_WGSJ0y3KxDoSvtb7MmGAIU	2022-12-06 19:04:58.20305+00	2022-12-07 19:04:58+00	5	c44d49e8f33f46a28eca4aa6dd1b3011
300	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQzOTg5OCwiaWF0IjoxNjcwMzUzNDk4LCJqdGkiOiIzMjI1MzU2YmIyYjQ0ZTVjYWExZWZlNmFkOWQ3ODhhNSIsInVzZXJfaWQiOjV9.KaaehQZ4ijcp-0aA3K7Zc2FoKrpaEH3SFA5k28GPpyc	2022-12-06 19:04:58.212756+00	2022-12-07 19:04:58+00	5	3225356bb2b44e5caa1efe6ad9d788a5
301	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MDE0OSwiaWF0IjoxNjcwMzUzNzQ5LCJqdGkiOiJkNzBjNjllYjc1Y2M0Mzk1YmY4ZGExNGYwNjAwYTZiNiIsInVzZXJfaWQiOjZ9.yLSrNT-71VKS8a4o4XRNXrq2ZNVl6BHqVoj2SMsaRjo	2022-12-06 19:09:09.198581+00	2022-12-07 19:09:09+00	6	d70c69eb75cc4395bf8da14f0600a6b6
302	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MDE0OSwiaWF0IjoxNjcwMzUzNzQ5LCJqdGkiOiI1NTBmNDI5ZmI4NzA0MTAwYjVkOWExODNiMGJkMzkyZSIsInVzZXJfaWQiOjZ9.FBv9vhof5-bg2_W_-aEncKg2EzGOtAbaq1wZFaN3dmg	2022-12-06 19:09:09.206576+00	2022-12-07 19:09:09+00	6	550f429fb8704100b5d9a183b0bd392e
303	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MDE2MSwiaWF0IjoxNjcwMzUzNzYxLCJqdGkiOiJlNTRkNTFkMGIxM2E0ZjIxOTExY2IyNWJjNjcwMDk2MyIsInVzZXJfaWQiOjF9.e8BZS6duJDhy4lrinW1vbAcm_3Z8jevswr_Vhp2B2LM	2022-12-06 19:09:21.105024+00	2022-12-07 19:09:21+00	1	e54d51d0b13a4f21911cb25bc6700963
304	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MDE2MSwiaWF0IjoxNjcwMzUzNzYxLCJqdGkiOiJlNGVjYmI4OGU0Mjc0NzE2ODRjMWI0MmYxNDZmNmZkZiIsInVzZXJfaWQiOjF9.cTbGPUjfHnG-7Iug5whQ85mdYjFwE5W-sUA5hx6U5f0	2022-12-06 19:09:21.112544+00	2022-12-07 19:09:21+00	1	e4ecbb88e427471684c1b42f146f6fdf
305	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTA2NSwiaWF0IjoxNjcwMzU0NjY1LCJqdGkiOiI5ODFiNDA1ODA3NDM0M2M4YjBlOTMxMGM0M2U0MDg4MiIsInVzZXJfaWQiOjV9.FQMh773151DxL58gheyZB16RVFpjRmlkzn57EhDfaa8	2022-12-06 19:24:25.880926+00	2022-12-07 19:24:25+00	5	981b4058074343c8b0e9310c43e40882
306	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTA2NSwiaWF0IjoxNjcwMzU0NjY1LCJqdGkiOiJiOTljYmUxODJkNTg0MmZlOWE2Mjg5NzBhOTNmMWZhYyIsInVzZXJfaWQiOjV9.ScNsvxUJL7Nz6AF7f0pmXduxc9NTGFSfyjQ8dFna8MM	2022-12-06 19:24:25.898928+00	2022-12-07 19:24:25+00	5	b99cbe182d5842fe9a628970a93f1fac
307	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTQ5NCwiaWF0IjoxNjcwMzU1MDk0LCJqdGkiOiI2ZWE5NjcxMTQ4ZjE0OGNhOGI2OWM0YTNiMzljZjQxNCIsInVzZXJfaWQiOjZ9.hq5aaym7cjjUCeupfKJ3BdLbl-ylV8Z3ku4Vi19ovZs	2022-12-06 19:31:34.894567+00	2022-12-07 19:31:34+00	6	6ea9671148f148ca8b69c4a3b39cf414
308	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTQ5NCwiaWF0IjoxNjcwMzU1MDk0LCJqdGkiOiJkNWQ0Y2UwNWI1MTc0NmU5YTJhYzg5MmNhZTUxYjhjNCIsInVzZXJfaWQiOjZ9.a0E4yPq9-oAUye2ZJz2OIO4UenYfLzag6WOXIqRKYaw	2022-12-06 19:31:34.906034+00	2022-12-07 19:31:34+00	6	d5d4ce05b51746e9a2ac892cae51b8c4
309	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTUyMywiaWF0IjoxNjcwMzU1MTIzLCJqdGkiOiI4MTU5YTMwNjcyOGE0OGIwYWVjMjM2MjZiZjgyMjZkMCIsInVzZXJfaWQiOjV9.4X6UJORSEwTKERk8iYm-G8F-5WRq0VnX8COFzJjt3Mo	2022-12-06 19:32:03.970857+00	2022-12-07 19:32:03+00	5	8159a306728a48b0aec23626bf8226d0
310	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTUyMywiaWF0IjoxNjcwMzU1MTIzLCJqdGkiOiI1YTc5OWU0NjA0NjE0NzZkYmM5ZjViMTZjZWIyZTk2MCIsInVzZXJfaWQiOjV9.PuGbE2FXiEtuAMo11FyehDtTr_4K_5PzhJnxJBSIQbA	2022-12-06 19:32:03.981538+00	2022-12-07 19:32:03+00	5	5a799e460461476dbc9f5b16ceb2e960
311	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTYyMywiaWF0IjoxNjcwMzU1MjIzLCJqdGkiOiI4YzM5Y2Y0MzNkNDk0MDBiODg1NTQyODA2NWUyZTVmZiIsInVzZXJfaWQiOjV9.rDcKK5Y4x3l1CtdLGUS1x8el8rGobc-NWGEudikphqY	2022-12-06 19:33:43.527691+00	2022-12-07 19:33:43+00	5	8c39cf433d49400b8855428065e2e5ff
312	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTYyMywiaWF0IjoxNjcwMzU1MjIzLCJqdGkiOiI3MmUxODZiMzhlOWE0MjhmYmQ5YWI0MTBiYTc1YzEzOCIsInVzZXJfaWQiOjV9.nnY8vuX0zE_mZbaQB-tVu0pusB32stFxYJBbsQXUjso	2022-12-06 19:33:43.533122+00	2022-12-07 19:33:43+00	5	72e186b38e9a428fbd9ab410ba75c138
313	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTc2MSwiaWF0IjoxNjcwMzU1MzYxLCJqdGkiOiI3MmM0NTk1NThiODc0YThhOTFlZDdlM2QyMjNkZjUyZCIsInVzZXJfaWQiOjF9.NVzQig7_lBkI6Oko_sWqrwVkolykquhmjcRhUkhouBM	2022-12-06 19:36:01.247751+00	2022-12-07 19:36:01+00	1	72c459558b874a8a91ed7e3d223df52d
314	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTc2MSwiaWF0IjoxNjcwMzU1MzYxLCJqdGkiOiJjZTYzNzgyMjMyNTM0YTZhOTc4NTg1OTM5NzRlYTBjNCIsInVzZXJfaWQiOjF9.1RynLws3W0ppWmq1MWZVZa-ip_1gtPIdS_UMfXdgI5I	2022-12-06 19:36:01.262169+00	2022-12-07 19:36:01+00	1	ce63782232534a6a97858593974ea0c4
315	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTc5NSwiaWF0IjoxNjcwMzU1Mzk1LCJqdGkiOiIyMjFmOGYwNGUyMjE0ZmY1YTU0OTFmZjM1MzExYmJjYSIsInVzZXJfaWQiOjZ9.64YOTn7MWqweVgipF640YHn8enEcnMZg-rOfLVNBopw	2022-12-06 19:36:35.295329+00	2022-12-07 19:36:35+00	6	221f8f04e2214ff5a5491ff35311bbca
316	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTc5NSwiaWF0IjoxNjcwMzU1Mzk1LCJqdGkiOiJjOGYyMjA0MWUwYTI0YzcxYmE0OTRjYmUwYjM3MDJlNSIsInVzZXJfaWQiOjZ9.680jMWrM-VTIe-o6jOB81_dkt0Ahd7Jj6VyPVrQQGvs	2022-12-06 19:36:35.302735+00	2022-12-07 19:36:35+00	6	c8f22041e0a24c71ba494cbe0b3702e5
317	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTgxMSwiaWF0IjoxNjcwMzU1NDExLCJqdGkiOiJkNzkwYTg0YjgyODQ0YzJjYTdkOTU1MDBkNjA5ZmRiMyIsInVzZXJfaWQiOjV9.LpZbFwmeQA8aonDnAcJRwH5fxsox0qchOmS_PO8MXpQ	2022-12-06 19:36:51.843312+00	2022-12-07 19:36:51+00	5	d790a84b82844c2ca7d95500d609fdb3
318	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTgxMSwiaWF0IjoxNjcwMzU1NDExLCJqdGkiOiIzNWZkNWM4NmJjMDA0NDE2OTQ3MThkODI4MzFlMzU1NSIsInVzZXJfaWQiOjV9.bjQq_j1dPJpL8ucouJI9nuGc5mtt7Qcd9Bk1FxsUuJ4	2022-12-06 19:36:51.851098+00	2022-12-07 19:36:51+00	5	35fd5c86bc00441694718d82831e3555
319	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTgyOCwiaWF0IjoxNjcwMzU1NDI4LCJqdGkiOiIwNTU3Y2VmOWM4MzE0ZDAxYmJkMjQyNTQ2MjNlZGQyZSIsInVzZXJfaWQiOjV9.IWyK24Oy51U5xhU9EfzXuWSRUIEtlKPww53_zmGEt58	2022-12-06 19:37:08.587742+00	2022-12-07 19:37:08+00	5	0557cef9c8314d01bbd24254623edd2e
320	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTgyOCwiaWF0IjoxNjcwMzU1NDI4LCJqdGkiOiIwOGExYjY3MTY0YjU0YjIwOWE1YTMzMGFkMTU2YjY5OCIsInVzZXJfaWQiOjV9.NmIJPIDbOEIvcW4v0IWELiIV4pG3vieQCRHKtOBgTp4	2022-12-06 19:37:08.598857+00	2022-12-07 19:37:08+00	5	08a1b67164b54b209a5a330ad156b698
321	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTg0MCwiaWF0IjoxNjcwMzU1NDQwLCJqdGkiOiJmYWM5MTA3OTFjMGQ0Y2YzYTExMTFmMzgyZDViZWUxOCIsInVzZXJfaWQiOjZ9.v6uI1n9KkR5RkvEHpALqxJCkg9T4VWE4KRAUSpBLpEo	2022-12-06 19:37:20.000999+00	2022-12-07 19:37:20+00	6	fac910791c0d4cf3a1111f382d5bee18
322	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0MTg0MCwiaWF0IjoxNjcwMzU1NDQwLCJqdGkiOiJmYTBhYmU2ZmVkMGY0ZTM1OThjMDEzNjkxZmEwMjE0OCIsInVzZXJfaWQiOjZ9.O8sle3D4VIQ3_ZewTS3cAhSYsFoO2v47Myno9rVK1Jk	2022-12-06 19:37:20.007858+00	2022-12-07 19:37:20+00	6	fa0abe6fed0f4e3598c013691fa02148
323	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0Mjc4MywiaWF0IjoxNjcwMzU2MzgzLCJqdGkiOiIyNjE3ZDRmNTVjZDg0YWM2ODJmM2EyM2I2ODMxMDFiMSIsInVzZXJfaWQiOjV9.6o_U97G5p2KdKXc0ZoV14OWmSOJ1nHHVsFLF_6nmWZk	2022-12-06 19:53:03.566904+00	2022-12-07 19:53:03+00	5	2617d4f55cd84ac682f3a23b683101b1
324	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0Mjc4MywiaWF0IjoxNjcwMzU2MzgzLCJqdGkiOiJiOGE5ZjRhNWE4ZTU0MWNiOWFmZWM3ZGJkNWU5ZmEwNyIsInVzZXJfaWQiOjV9.rBZcBMtF0-1Mt0JPGHJJMlE1qMEcz_1R1xmKe4zstZE	2022-12-06 19:53:03.583755+00	2022-12-07 19:53:03+00	5	b8a9f4a5a8e541cb9afec7dbd5e9fa07
325	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0Mjg3NiwiaWF0IjoxNjcwMzU2NDc2LCJqdGkiOiI4NjA4YmVlOGY2ZDU0ZmNkOWM0OGYyN2FiYmIwNGJjZiIsInVzZXJfaWQiOjZ9.BHN-t-DB531JzrrA5YrsebmGThMqjj68b2Mo4nFA1mk	2022-12-06 19:54:36.764535+00	2022-12-07 19:54:36+00	6	8608bee8f6d54fcd9c48f27abbb04bcf
326	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ0Mjg3NiwiaWF0IjoxNjcwMzU2NDc2LCJqdGkiOiIyZTBhODM1NzQ5ZGI0MmNmYTUzN2JiOTUyMzMxMjJhNyIsInVzZXJfaWQiOjZ9._gf04U_wKW63Oa-jDuAgC7mIZSzUvOwy6Y6imG1lHUM	2022-12-06 19:54:36.778205+00	2022-12-07 19:54:36+00	6	2e0a835749db42cfa537bb95233122a7
327	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ1MjAyNSwiaWF0IjoxNjcwMzY1NjI1LCJqdGkiOiI5MTcwOTY4NDQ5ODA0MTRjYTM3NzNjMjE2ODRkZDljZSIsInVzZXJfaWQiOjh9.hDunRMLF-D7fPYNmeO0smlvH7exaZaq1ennZNZ265F8	2022-12-06 22:27:05.907105+00	2022-12-07 22:27:05+00	8	917096844980414ca3773c21684dd9ce
328	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ1MjAyNSwiaWF0IjoxNjcwMzY1NjI1LCJqdGkiOiI1Nzg1YmQwMmNhYjE0MGI3OTgxOGVlNTdiZjhhZDEyOSIsInVzZXJfaWQiOjh9.a6e3rqvpnvPCP8xK09iaOsO9DOtJjE4No1ru0h6xDpY	2022-12-06 22:27:05.919791+00	2022-12-07 22:27:05+00	8	5785bd02cab140b79818ee57bf8ad129
329	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ1MjA0MCwiaWF0IjoxNjcwMzY1NjQwLCJqdGkiOiJmZTg0YjFlZTM2YjA0MzNmYmRmMDJhMjE4NTNlYTdmOSIsInVzZXJfaWQiOjF9.__bjkY6BEqGo_mSs-xKh22kZrOmX9aAzK9X0PtEJEqA	2022-12-06 22:27:20.643674+00	2022-12-07 22:27:20+00	1	fe84b1ee36b0433fbdf02a21853ea7f9
330	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ1MjA0MCwiaWF0IjoxNjcwMzY1NjQwLCJqdGkiOiJiODViZDI1MTljYWM0ZWUxODlmMDczM2UyNDE2ZTk1MyIsInVzZXJfaWQiOjF9.GYmNfkZE6L1LA2mh_KrhwvoR132OmRDO2QRfFqN91HI	2022-12-06 22:27:20.650497+00	2022-12-07 22:27:20+00	1	b85bd2519cac4ee189f0733e2416e953
331	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ3MTkyOCwiaWF0IjoxNjcwMzg1NTI4LCJqdGkiOiI1NWI4ZDAyN2Q3ZWM0NGE2YmEwYTMyMTM0ZWQwOGU3OSIsInVzZXJfaWQiOjV9.20Nge6pEzsYZS_YMgk1RtU-dlfVgZlOTURzGsrX80rM	2022-12-07 03:58:48.012044+00	2022-12-08 03:58:48+00	5	55b8d027d7ec44a6ba0a32134ed08e79
332	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ3MTkyOCwiaWF0IjoxNjcwMzg1NTI4LCJqdGkiOiI2OTM2MDBjOTg3NzQ0NWYxOGE3YjUxNWVjYWNhZTBmYiIsInVzZXJfaWQiOjV9.txaIxE4AGAQN6YRaz-anmLIh7pweCaMDe-zuAoqpivc	2022-12-07 03:58:48.023446+00	2022-12-08 03:58:48+00	5	693600c9877445f18a7b515ecacae0fb
333	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ3MjM3OSwiaWF0IjoxNjcwMzg1OTc5LCJqdGkiOiJmOGU3ZTVhMDE4NmI0MThmOWVkNjYxYTZlNzJjYTRlNiIsInVzZXJfaWQiOjV9.eQPw0Q3-Ka006Fh5BROzQkJckNc0dSAU4ysXv5Rhvpo	2022-12-07 04:06:19.045917+00	2022-12-08 04:06:19+00	5	f8e7e5a0186b418f9ed661a6e72ca4e6
334	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ3MjM3OSwiaWF0IjoxNjcwMzg1OTc5LCJqdGkiOiIwZDEyNGY3ZTU1YzA0OWM4OTI4MGZkYWMwMWU4OWUwMyIsInVzZXJfaWQiOjV9.UmtN0DH6Q2i2_yxdc4JfGJlvktMHWIJFqbZGPd-vygA	2022-12-07 04:06:19.056425+00	2022-12-08 04:06:19+00	5	0d124f7e55c049c89280fdac01e89e03
335	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ3MzY5MiwiaWF0IjoxNjcwMzg3MjkyLCJqdGkiOiJkYjIwZDU4ODI1MWQ0OGI1YWE2MmYyNTBmMGNmMzdhMSIsInVzZXJfaWQiOjZ9.gYXrtkz0oF18x2EXniLVFa7KOR5sKU9o2PBKfIrxbP8	2022-12-07 04:28:12.122344+00	2022-12-08 04:28:12+00	6	db20d588251d48b5aa62f250f0cf37a1
336	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ3MzY5MiwiaWF0IjoxNjcwMzg3MjkyLCJqdGkiOiJjZTM3OWNjYTc1ZTQ0MzJlYjQzM2RhYTVkNmVjNzNlZCIsInVzZXJfaWQiOjZ9.yXGaPc1AWDy5nGUu_iVDhqN8ZOVak8I_u5T55y8R-pM	2022-12-07 04:28:12.130374+00	2022-12-08 04:28:12+00	6	ce379cca75e4432eb433daa5d6ec73ed
337	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ3NDIwOSwiaWF0IjoxNjcwMzg3ODA5LCJqdGkiOiIwNzFmNjMxMjMzMTU0ZTJlOTE5MTdhZmI2ODZjNmQ4MyIsInVzZXJfaWQiOjV9.164Zdl6h9T27XRTsK4b0HIa8HwL6-2c1-sue113pqvw	2022-12-07 04:36:49.609492+00	2022-12-08 04:36:49+00	5	071f631233154e2e91917afb686c6d83
338	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ3NDIwOSwiaWF0IjoxNjcwMzg3ODA5LCJqdGkiOiIyY2VkNzRhMDRjNTA0ZWQ1YTExYjk3MzU3NGZmZjZjNiIsInVzZXJfaWQiOjV9.Lq7VF7hUelog7d1DrJSmzLYXACokwlfD86XjvT8BA1I	2022-12-07 04:36:49.633423+00	2022-12-08 04:36:49+00	5	2ced74a04c504ed5a11b973574fff6c6
339	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ3NDMzOCwiaWF0IjoxNjcwMzg3OTM4LCJqdGkiOiI0YmQ3YzM2MjVhZDk0MDY5OTY4NThmYWY4M2E0MDE1OSIsInVzZXJfaWQiOjd9.iuBEmIub55G-cvKnPj-QgqooSOKnbVD9wFuvsPOOO74	2022-12-07 04:38:58.357028+00	2022-12-08 04:38:58+00	7	4bd7c3625ad9406996858faf83a40159
340	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ3NDMzOCwiaWF0IjoxNjcwMzg3OTM4LCJqdGkiOiJjNTcyZmM1NWNlOTU0NjdhOGVjNzBiNGFkZjdmZWQ4MyIsInVzZXJfaWQiOjd9.m3K-1c0nWuugCsRu-3qlrMnq5DtXdynU2x12zYKAMh0	2022-12-07 04:38:58.374247+00	2022-12-08 04:38:58+00	7	c572fc55ce95467a8ec70b4adf7fed83
341	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ3NDc0MCwiaWF0IjoxNjcwMzg4MzQwLCJqdGkiOiI0NzBmYWRlYWEyNmU0OTNlYTRmYTQ1NWY3YTlhYTE5ZiIsInVzZXJfaWQiOjF9.kcC91xdRa6IGzL_z5pzD2cBgl4LM-1YaIBNL6o39Klw	2022-12-07 04:45:40.557412+00	2022-12-08 04:45:40+00	1	470fadeaa26e493ea4fa455f7a9aa19f
342	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ3NDc0MCwiaWF0IjoxNjcwMzg4MzQwLCJqdGkiOiI1MjI4MGIyMTJiMDY0Mzc0ODRlZjdiYmRjMzAxMzE0YiIsInVzZXJfaWQiOjF9.DlYNnBA2BexhTY3j0S-qZ5ZjZ-G9crDC2V0A1YXY1Is	2022-12-07 04:45:40.570068+00	2022-12-08 04:45:40+00	1	52280b212b06437484ef7bbdc301314b
343	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ3NDg4NywiaWF0IjoxNjcwMzg4NDg3LCJqdGkiOiI0NWVlZTFlMzEzMGM0ZmI3ODJlNjJlY2IxYzhkZDFkZCIsInVzZXJfaWQiOjd9.wPXAOpCUQaS60vSy-8p2eEilaeZ844VYI6uY9IjK8_M	2022-12-07 04:48:07.762599+00	2022-12-08 04:48:07+00	7	45eee1e3130c4fb782e62ecb1c8dd1dd
344	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ3NDg4NywiaWF0IjoxNjcwMzg4NDg3LCJqdGkiOiJjMGM5ODg3NDk5ZDU0MDFjODQ0MjljODQwZmQ3Y2Q3ZiIsInVzZXJfaWQiOjd9.yVR9-4eUNUZcKKw4YXRBQO3vKqUC4zueFcx0jShRZQw	2022-12-07 04:48:07.77336+00	2022-12-08 04:48:07+00	7	c0c9887499d5401c84429c840fd7cd7f
345	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ3NTA5NSwiaWF0IjoxNjcwMzg4Njk1LCJqdGkiOiI3ZDhiNzllNGE1OTc0NDBhODYxNGU5NWY4NzYzMjZlOCIsInVzZXJfaWQiOjF9.BWPMLMwfe6Gn5HVbvMb3HChjXEKJ9VlGTvdidwvbX60	2022-12-07 04:51:35.542098+00	2022-12-08 04:51:35+00	1	7d8b79e4a597440a8614e95f876326e8
346	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ3NTA5NSwiaWF0IjoxNjcwMzg4Njk1LCJqdGkiOiJmMGU2MWYwMWQ1YTc0OTMxOTQ5NzQ2YjMyM2RkZTExZCIsInVzZXJfaWQiOjF9.H1KLP6mH9DcEi_NNlnstPugH8WNmsVZCxB_qe42jtOg	2022-12-07 04:51:35.550457+00	2022-12-08 04:51:35+00	1	f0e61f01d5a74931949746b323dde11d
347	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ4NTgyNCwiaWF0IjoxNjcwMzk5NDI0LCJqdGkiOiI0ZmIzMDljY2Q3YTU0Y2U1OTI3YzVjNjg4NzAxZTVjMyIsInVzZXJfaWQiOjV9.EgGIBUTTVH15LLZ6LLOBobvZ1ZKRWDgKG1cE0uCgdZU	2022-12-07 07:50:24.361287+00	2022-12-08 07:50:24+00	5	4fb309ccd7a54ce5927c5c688701e5c3
348	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDQ4NTgyNCwiaWF0IjoxNjcwMzk5NDI0LCJqdGkiOiIyY2RhOWNmMDc2ZDM0ZmI5OGFhNmY0MTkzNWMxNDQzMiIsInVzZXJfaWQiOjV9.8UuyDnFgXstez87yvA8N4uVW7S9BFrXmOWM1VdzRMIY	2022-12-07 07:50:24.373553+00	2022-12-08 07:50:24+00	5	2cda9cf076d34fb98aa6f41935c14432
349	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDUxNTMyNSwiaWF0IjoxNjcwNDI4OTI1LCJqdGkiOiIwOTRkMGU4MjEyMDY0NGFlYTVhOGE5NDc2MmQ3NmEyZSIsInVzZXJfaWQiOjZ9.qrJg1s1HjJBQAOkK36830n4qSZ5WsjpdUI_fuMFi1zE	2022-12-07 16:02:05.436776+00	2022-12-08 16:02:05+00	6	094d0e82120644aea5a8a94762d76a2e
350	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDUxNTMyNSwiaWF0IjoxNjcwNDI4OTI1LCJqdGkiOiJjNjlhZTE1OWFiMmM0ZjU5YmEzMTliZGVmMGE2M2M2ZCIsInVzZXJfaWQiOjZ9.aUPt1Kp8ckOoS2ef7Gen96Vx8gWUCQvlkytvfeYYg2Q	2022-12-07 16:02:05.455074+00	2022-12-08 16:02:05+00	6	c69ae159ab2c4f59ba319bdef0a63c6d
351	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDUxNTM2NSwiaWF0IjoxNjcwNDI4OTY1LCJqdGkiOiJmYjQ1NGQ4ZjE0YTE0Y2Q2YmQxN2JjMjQ5MDY1YzM4ZiIsInVzZXJfaWQiOjZ9.rpq-1Z3vRaKFl_ulOvNyyPEiWAVvUdU1ZClKNPEz3DI	2022-12-07 16:02:45.143479+00	2022-12-08 16:02:45+00	6	fb454d8f14a14cd6bd17bc249065c38f
352	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDUxNTM2NSwiaWF0IjoxNjcwNDI4OTY1LCJqdGkiOiJhODI0ZDRkM2VlZmM0OTBkODlhODJjZTI1YjFjMWM1OSIsInVzZXJfaWQiOjZ9.rWjavvfwa8KdTu1iI5AfZNn6uVo7z76nfCtCXIPeLc8	2022-12-07 16:02:45.154542+00	2022-12-08 16:02:45+00	6	a824d4d3eefc490d89a82ce25b1c1c59
353	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDUxNTY5NywiaWF0IjoxNjcwNDI5Mjk3LCJqdGkiOiIzNGRiMTkwYmE5ODY0MTg2YjA5ZmIxYTUxYjM5NzY5MiIsInVzZXJfaWQiOjV9.Wm8qZrcM-xIStTyYc4fo6q3_710RANlH40r2PLjrs1c	2022-12-07 16:08:17.006429+00	2022-12-08 16:08:17+00	5	34db190ba9864186b09fb1a51b397692
354	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDUxNTY5NywiaWF0IjoxNjcwNDI5Mjk3LCJqdGkiOiIwOGUyN2JkZDgxNDc0YzMxYTFhNTUxNzNmMDk0MjllYiIsInVzZXJfaWQiOjV9.pVOUIVIcU4Zy0hSLXPTY5-J1mh_J416279-NoQij5Sw	2022-12-07 16:08:17.024038+00	2022-12-08 16:08:17+00	5	08e27bdd81474c31a1a55173f09429eb
355	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDUxOTE5MiwiaWF0IjoxNjcwNDMyNzkyLCJqdGkiOiIzODMzZDM1MTZlZTY0YzhmYmUxZjZjOGIxYjVjMTQ0OCIsInVzZXJfaWQiOjV9.csq54rTRNhE8yApYeL0frkDtuS22-Ju1QfhBAetD30A	2022-12-07 17:06:32.414259+00	2022-12-08 17:06:32+00	5	3833d3516ee64c8fbe1f6c8b1b5c1448
356	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDUxOTE5MiwiaWF0IjoxNjcwNDMyNzkyLCJqdGkiOiJhMWRiYzY3YzA1YWE0NDU4OGNkZWFiOTdmYzAyYTMzZCIsInVzZXJfaWQiOjV9.cqlGeuuueRVmuQoboVVVYP1cOgqMvU5WxNqy6eNoBww	2022-12-07 17:06:32.425614+00	2022-12-08 17:06:32+00	5	a1dbc67c05aa44588cdeab97fc02a33d
357	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDUyMTgxMCwiaWF0IjoxNjcwNDM1NDEwLCJqdGkiOiI4ZThmYjkwMzllYzU0OTlkOWJkYWZlMjIyNzE2MDFkMCIsInVzZXJfaWQiOjZ9.AsiXYpa83KyAxobbelbeaXBO1y9pjWnEDCE4HIplpmU	2022-12-07 17:50:10.062465+00	2022-12-08 17:50:10+00	6	8e8fb9039ec5499d9bdafe22271601d0
358	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDUyMTgxMCwiaWF0IjoxNjcwNDM1NDEwLCJqdGkiOiI4ZmM4MWQ0ZWE0YmU0N2Y3YTk5N2YyYjdlMTExMjdjNCIsInVzZXJfaWQiOjZ9.6lirjFQsBvb3Gw6GVl9fLD2I7gNecGbV-W8VhDGTfPE	2022-12-07 17:50:10.070237+00	2022-12-08 17:50:10+00	6	8fc81d4ea4be47f7a997f2b7e11127c4
359	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDUyMTgzMSwiaWF0IjoxNjcwNDM1NDMxLCJqdGkiOiJiZjM5Y2UwOWRjN2I0NWIyYjgwYmIyMDhhYzg4YWRiZiIsInVzZXJfaWQiOjF9.ZMVXulNKq4tp5-uuEypcITYZIzdVktbDNjEYHGwJuOU	2022-12-07 17:50:31.922295+00	2022-12-08 17:50:31+00	1	bf39ce09dc7b45b2b80bb208ac88adbf
360	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDUyMTgzMSwiaWF0IjoxNjcwNDM1NDMxLCJqdGkiOiJjNWYzMzcwNzgzYmY0MDI4YTlkNThkMmEyNTQ4ZDIzYiIsInVzZXJfaWQiOjF9.zGbz6_yGPFUnT15PA7_5pFwxBGO_zJuqYXIcxEcrQD4	2022-12-07 17:50:31.931172+00	2022-12-08 17:50:31+00	1	c5f3370783bf4028a9d58d2a2548d23b
361	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDUyNDMyMiwiaWF0IjoxNjcwNDM3OTIyLCJqdGkiOiIyZjc1OWRlZTg5ZDU0ZjkwODJiNTA3NGUyMGFhYzM5NCIsInVzZXJfaWQiOjF9.A479QMxEs9VMoNO7Cw6pFoFeRHXyVtl6lFxcua4dRoY	2022-12-07 18:32:02.475329+00	2022-12-08 18:32:02+00	1	2f759dee89d54f9082b5074e20aac394
362	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDUyNDMyMiwiaWF0IjoxNjcwNDM3OTIyLCJqdGkiOiIxODRiYTRhZDNkNmM0YWY5YmQwNjg2YTFkNjZmNzA5NiIsInVzZXJfaWQiOjF9.eHk14mkzmKIakCUX9TanZV1h6FPvBItNJ-kwRXnkKRc	2022-12-07 18:32:02.489431+00	2022-12-08 18:32:02+00	1	184ba4ad3d6c4af9bd0686a1d66f7096
363	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0MDYwOSwiaWF0IjoxNjcwNDU0MjA5LCJqdGkiOiI4YjMyZjZiMTdjZDE0ZTE1ODE4ZmJkZjU5NmY2MDVjZiIsInVzZXJfaWQiOjh9.3Vd4X8rfrB-YzHL7ITYszkOrrTsHqdBly5Xo3QQsHUY	2022-12-07 23:03:29.012912+00	2022-12-08 23:03:29+00	8	8b32f6b17cd14e15818fbdf596f605cf
364	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0MDYwOSwiaWF0IjoxNjcwNDU0MjA5LCJqdGkiOiI4Njg2M2IwYjU4OTg0YTVhYjg4MTMyZmUzOTI3MTM3OSIsInVzZXJfaWQiOjh9.nEQSDfZE261gKrVSGCsaghA3H10QS3-yneC2FZfp7rw	2022-12-07 23:03:29.103226+00	2022-12-08 23:03:29+00	8	86863b0b58984a5ab88132fe39271379
365	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0MDc5MywiaWF0IjoxNjcwNDU0MzkzLCJqdGkiOiI3NTUyNGJkNGQ0ZTQ0YTcwYTMwMjc3M2RmYjE5ZGZmMyIsInVzZXJfaWQiOjF9.znto-p5gbyMH7cnLlG4f1SZD3WRiLdG0kagPPi8zBPI	2022-12-07 23:06:33.989596+00	2022-12-08 23:06:33+00	1	75524bd4d4e44a70a302773dfb19dff3
366	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0MDc5NCwiaWF0IjoxNjcwNDU0Mzk0LCJqdGkiOiJmZTUxZTczYTc5MGE0MzZiYmY5YTk3ZTQ0Y2E1Mzg4ZCIsInVzZXJfaWQiOjF9.GuqOjSiNBnA-GT2YE4lR7Keatl7Wr4tlxRW0lZIJ_BQ	2022-12-07 23:06:34.005772+00	2022-12-08 23:06:34+00	1	fe51e73a790a436bbf9a97e44ca5388d
367	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0MDkzOCwiaWF0IjoxNjcwNDU0NTM4LCJqdGkiOiJlZjVjNjhjYzY0NWQ0MjM5OGE3ZDA3NzIyODFmNzIxNiIsInVzZXJfaWQiOjh9.EKZgO4ZxIWyY1Go9RVEAOttpj0mNCqZ_CIS30dp0XHY	2022-12-07 23:08:58.363477+00	2022-12-08 23:08:58+00	8	ef5c68cc645d42398a7d0772281f7216
368	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0MDkzOCwiaWF0IjoxNjcwNDU0NTM4LCJqdGkiOiI5MmYxNzhlMjIwNGI0NTRlOGNkOWQ1YmZkMzE1M2VkYSIsInVzZXJfaWQiOjh9.bEBpL_rCmd57p7nFWm6ahmbphRVIqZama3LrRRlpXiA	2022-12-07 23:08:58.507473+00	2022-12-08 23:08:58+00	8	92f178e2204b454e8cd9d5bfd3153eda
369	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0MDk0MSwiaWF0IjoxNjcwNDU0NTQxLCJqdGkiOiJiY2Y2YjU1NWM4YzQ0NTMyYjIyNDE3MWFjZDliNWFlYiIsInVzZXJfaWQiOjh9.QJ0urn09mItEjwMUdWtoK5SkvHfNlpz30LmwLEhPsTM	2022-12-07 23:09:01.648593+00	2022-12-08 23:09:01+00	8	bcf6b555c8c44532b224171acd9b5aeb
370	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0MDk0MSwiaWF0IjoxNjcwNDU0NTQxLCJqdGkiOiJiM2ZjNWFjYzdjZmU0MmQ0ODM4MjBhZWNmMzg2Y2Q0YiIsInVzZXJfaWQiOjh9.rW2JQ_9yygUy6kcbbBfPZi6VB9AO-OGFYmxxjqimSco	2022-12-07 23:09:01.654305+00	2022-12-08 23:09:01+00	8	b3fc5acc7cfe42d483820aecf386cd4b
371	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0MTA0MiwiaWF0IjoxNjcwNDU0NjQyLCJqdGkiOiJiYzA1M2Y4Mzk4ZDE0YWQwYTg2NzJiMzA0ZjY5N2YzOCIsInVzZXJfaWQiOjh9.0Q9MykZv_E5e3GbXHKWNP-gJLaoKjOhnwZ2rtIX652Y	2022-12-07 23:10:42.375391+00	2022-12-08 23:10:42+00	8	bc053f8398d14ad0a8672b304f697f38
372	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0MTA0MiwiaWF0IjoxNjcwNDU0NjQyLCJqdGkiOiIwN2NjY2RmYzRjZmQ0Nzk3ODJhZjgxYTAzYjUzOWQ3YyIsInVzZXJfaWQiOjh9.Yle5mstTAMEQyflV1hsNkpEoghVZBw8WEC-N_GRdR-w	2022-12-07 23:10:42.384708+00	2022-12-08 23:10:42+00	8	07cccdfc4cfd479782af81a03b539d7c
373	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0MTEzMiwiaWF0IjoxNjcwNDU0NzMyLCJqdGkiOiI5Yzg2NGZjNTQyMmQ0YTc1OGVhNDEwYzg3MjBjMDgxNSIsInVzZXJfaWQiOjh9.CkUtLHbFEGku3QILX2mPX2_O-CLcS-3AdqvVzcP4PfE	2022-12-07 23:12:12.349201+00	2022-12-08 23:12:12+00	8	9c864fc5422d4a758ea410c8720c0815
374	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0MTEzMiwiaWF0IjoxNjcwNDU0NzMyLCJqdGkiOiI2YjRiYmZlMzNhYmU0ZWUzYjU4M2MwMmEyYjk3YzI5MCIsInVzZXJfaWQiOjh9.HRUWfhnOEfkVg_vtvLqqsJShJL8w-htkcgaiO6yYq8I	2022-12-07 23:12:12.436679+00	2022-12-08 23:12:12+00	8	6b4bbfe33abe4ee3b583c02a2b97c290
375	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NTY4MywiaWF0IjoxNjcwNDU5MjgzLCJqdGkiOiJkZGVlNWM1ZTQ2NjU0NTI1OTg5NWQ4OTE5ZTRhNTg5ZiIsInVzZXJfaWQiOjV9.y8jj7Mwu18NQkkqJr3LKoLsdlChqYtBDAdyKddJefsY	2022-12-08 00:28:03.790656+00	2022-12-09 00:28:03+00	5	ddee5c5e466545259895d8919e4a589f
376	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NTY4MywiaWF0IjoxNjcwNDU5MjgzLCJqdGkiOiI5ZjE5ZDY5NmYwNGY0MWVhOGE2OTAxNTFkZDVmNGFmNyIsInVzZXJfaWQiOjV9.xYlQDyiBWBGluIu9ITiz3mmrpjy7CeygX7OyOOXpDe4	2022-12-08 00:28:03.802018+00	2022-12-09 00:28:03+00	5	9f19d696f04f41ea8a690151dd5f4af7
377	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NTg5MywiaWF0IjoxNjcwNDU5NDkzLCJqdGkiOiIwNTBmODRkMTZlZjE0Y2U4YWZmYTllNmJhMzRlZWNiYyIsInVzZXJfaWQiOjF9.TjPFztaHfb4Z2m-VGpi_LCwek47TkpOshzQf5vdjfmQ	2022-12-08 00:31:33.944667+00	2022-12-09 00:31:33+00	1	050f84d16ef14ce8affa9e6ba34eecbc
378	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NTg5MywiaWF0IjoxNjcwNDU5NDkzLCJqdGkiOiIxZDExZTQ1ZDc3OGI0YTAzODUxNmVmYzQ1MzIzMTlmNCIsInVzZXJfaWQiOjF9._Ca1Dr2HEux52fRa7Tw21FwOSSnIUOYOxK1bmyiTFms	2022-12-08 00:31:33.953777+00	2022-12-09 00:31:33+00	1	1d11e45d778b4a038516efc4532319f4
379	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NTkwNywiaWF0IjoxNjcwNDU5NTA3LCJqdGkiOiJmNzU3NWE0M2E0YjQ0MDc2YTkyOGEwN2EyMGNjYWE2MiIsInVzZXJfaWQiOjZ9.-UJOIYWYlK6sTF7K8t-anTbh42hyLooo1ripNE7qG0M	2022-12-08 00:31:47.737788+00	2022-12-09 00:31:47+00	6	f7575a43a4b44076a928a07a20ccaa62
380	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NTkwNywiaWF0IjoxNjcwNDU5NTA3LCJqdGkiOiJiNGRiNmNkNDRhZmM0ODNiODFiMTU1ZjdmNDcyMGRiNiIsInVzZXJfaWQiOjZ9.gAcK-LiU61ejb1p03wsnwq4SXPTB5AY0mMT6fHqTsm8	2022-12-08 00:31:47.751047+00	2022-12-09 00:31:47+00	6	b4db6cd44afc483b81b155f7f4720db6
381	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NjA0OSwiaWF0IjoxNjcwNDU5NjQ5LCJqdGkiOiIzMWE1MjBhMmFjZTg0MTE2YWQ2Y2I5ZjcwNjMzMWQwYiIsInVzZXJfaWQiOjZ9.H_rFKHzxsLw86VM_2YXGImYXmEHyVlxpHxq-LfsuBl0	2022-12-08 00:34:09.10224+00	2022-12-09 00:34:09+00	6	31a520a2ace84116ad6cb9f706331d0b
382	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NjA0OSwiaWF0IjoxNjcwNDU5NjQ5LCJqdGkiOiJlMTJlNDY1ZjBmMzk0ZWI1YjI5MTk5NTA3MTU0NzI4NyIsInVzZXJfaWQiOjZ9.Uln7ZpWy5CvqRfiE23B0FuiTrzHRZMVF5Zat3DIg58U	2022-12-08 00:34:09.111085+00	2022-12-09 00:34:09+00	6	e12e465f0f394eb5b291995071547287
383	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NjA2NSwiaWF0IjoxNjcwNDU5NjY1LCJqdGkiOiIxNGY1MGU0NmExMTA0MzU1OTEzYzNmYTg3MDkwNjkzYSIsInVzZXJfaWQiOjV9.SHcyPcO23G3F0maVdKyFgcHKpZkxabjoWkVJul7EchU	2022-12-08 00:34:25.317245+00	2022-12-09 00:34:25+00	5	14f50e46a1104355913c3fa87090693a
384	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NjA2NSwiaWF0IjoxNjcwNDU5NjY1LCJqdGkiOiIyYzJkZjliN2VlMWE0Yjg5YmNiYjc2NGQ0OGYyOGYxZiIsInVzZXJfaWQiOjV9.leq9912Z27Cksz4W3tu0m1n6HGTNEFEVt2nConaRAzk	2022-12-08 00:34:25.328424+00	2022-12-09 00:34:25+00	5	2c2df9b7ee1a4b89bcbb764d48f28f1f
385	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NjI0MywiaWF0IjoxNjcwNDU5ODQzLCJqdGkiOiI4NmExOWZlYzNmNjY0NDcyYjg5YjFkNjNiNWNmOWExZSIsInVzZXJfaWQiOjZ9.9qz4kXN90cFm0bwWO-n7Jus_heJC9jArSfDJm3gQVS4	2022-12-08 00:37:23.329689+00	2022-12-09 00:37:23+00	6	86a19fec3f664472b89b1d63b5cf9a1e
386	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NjI0MywiaWF0IjoxNjcwNDU5ODQzLCJqdGkiOiJlNDhjYzZiNjYyNjA0NWUzYTlmOWRmY2ZiM2ExZDUyOSIsInVzZXJfaWQiOjZ9.pJ4-iWOTWqFk2R5zwjxkwzL-lb9AaWLsGl3PNdoWb9I	2022-12-08 00:37:23.358967+00	2022-12-09 00:37:23+00	6	e48cc6b6626045e3a9f9dfcfb3a1d529
387	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NzMwMiwiaWF0IjoxNjcwNDYwOTAyLCJqdGkiOiJlYmQzOGI2NzUzYTg0NjA3YjI2NTY5Y2Y4NzE4NGQ3MSIsInVzZXJfaWQiOjF9.49FPadmwr5O1-1PaWT-1tVGDY0f19BteO4EMXfYyxUE	2022-12-08 00:55:02.684051+00	2022-12-09 00:55:02+00	1	ebd38b6753a84607b26569cf87184d71
388	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NzMwMiwiaWF0IjoxNjcwNDYwOTAyLCJqdGkiOiJiODgyYTk3MzNkM2E0MzE4YTM2ZTA5YjY1YjBkYWVhMiIsInVzZXJfaWQiOjF9.8NopigLh9VUawFPG82IUuxMZpkNL1ikf1TP5EAdrUQw	2022-12-08 00:55:02.694965+00	2022-12-09 00:55:02+00	1	b882a9733d3a4318a36e09b65b0daea2
389	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NzUwOCwiaWF0IjoxNjcwNDYxMTA4LCJqdGkiOiI5MmZkZmYzOWYyZGU0ZjIzOTAwMTg5YmY2YzZlMjQ4NSIsInVzZXJfaWQiOjF9.1555Etpmyyox95CuPrQRXEg3-bT1X4CYN8Fcn71Kkgo	2022-12-08 00:58:28.067892+00	2022-12-09 00:58:28+00	1	92fdff39f2de4f23900189bf6c6e2485
390	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NzUwOCwiaWF0IjoxNjcwNDYxMTA4LCJqdGkiOiI3ZmEwZGFlYmU3MGM0MDY2YjljZTVmMzEzODMyMzQyMSIsInVzZXJfaWQiOjF9.Mz91pNzmrWpqkBy76jZ6vySADiO13VsyXaeCY6O4LvA	2022-12-08 00:58:28.078973+00	2022-12-09 00:58:28+00	1	7fa0daebe70c4066b9ce5f3138323421
391	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NzY4MywiaWF0IjoxNjcwNDYxMjgzLCJqdGkiOiI5NWEwMGMwZTNkNGQ0YzZlODg5OGYwNjZjOGM0MWJmMiIsInVzZXJfaWQiOjF9.TBanoWnNadQZL1g-y8PBbjH1WXhPKCob78VaCWnOyZ4	2022-12-08 01:01:23.253379+00	2022-12-09 01:01:23+00	1	95a00c0e3d4d4c6e8898f066c8c41bf2
392	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0NzY4MywiaWF0IjoxNjcwNDYxMjgzLCJqdGkiOiI3YzY5OTdmZjVjMWM0NDE3YTkxNjUxZGZiOGU0NTc0MiIsInVzZXJfaWQiOjF9.iKeYR0-dDljlf6vpiu7vU2zXVJame9we_1p-3PI9q4s	2022-12-08 01:01:23.383369+00	2022-12-09 01:01:23+00	1	7c6997ff5c1c4417a91651dfb8e45742
393	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODE2NSwiaWF0IjoxNjcwNDYxNzY1LCJqdGkiOiJlMGI2MmY4ODk3YzM0ZmU0YjI3Yjg3MTZkOTMxNmZhYyIsInVzZXJfaWQiOjF9.KPwzl0ns79bH8EDYO6Og0X8uacosKLe0HGXY9JBocu0	2022-12-08 01:09:25.817965+00	2022-12-09 01:09:25+00	1	e0b62f8897c34fe4b27b8716d9316fac
394	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODE2NSwiaWF0IjoxNjcwNDYxNzY1LCJqdGkiOiIzN2NlOTQyZDgxMzk0NjA4ODA1NTFmZWU3OWJlNzU5MyIsInVzZXJfaWQiOjF9.od4nG-VWrIfsvicx4A10DSD7mMpVS9CWfPqKrYnGzwo	2022-12-08 01:09:25.828253+00	2022-12-09 01:09:25+00	1	37ce942d8139460880551fee79be7593
395	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODE4MCwiaWF0IjoxNjcwNDYxNzgwLCJqdGkiOiJjM2RjMDBmNDY2OGI0NWM3OWU0MzI2YjkzNGZkMjM5NyIsInVzZXJfaWQiOjF9.RaSZeDPDgK3s4YKL7-Lfysl5ZqgN4CZW8A8tedx8PK8	2022-12-08 01:09:40.449061+00	2022-12-09 01:09:40+00	1	c3dc00f4668b45c79e4326b934fd2397
396	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODE4MCwiaWF0IjoxNjcwNDYxNzgwLCJqdGkiOiJmMTA2YzMxZDRjMWE0YWRkOTZjZWUzNzYzODA2ZDBmMCIsInVzZXJfaWQiOjF9.6gKaYkquH6OoLsRi1Leaynpcl5pCHRPYxR9FimjWQTc	2022-12-08 01:09:40.462736+00	2022-12-09 01:09:40+00	1	f106c31d4c1a4add96cee3763806d0f0
397	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODE4MiwiaWF0IjoxNjcwNDYxNzgyLCJqdGkiOiI0ZGVhOTM5NmYzMGQ0NTE4YWM4NmVkODc3MTk3OTA2MCIsInVzZXJfaWQiOjF9.8qSRQCdYJtTKWrR3d27tGgsXZRK86_TWaFmzuw_xh3E	2022-12-08 01:09:42.740859+00	2022-12-09 01:09:42+00	1	4dea9396f30d4518ac86ed8771979060
398	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODE4MiwiaWF0IjoxNjcwNDYxNzgyLCJqdGkiOiI0N2MyMjBiNjYzMWE0ZjJkYjBhM2MyYThkMGExOWRlOCIsInVzZXJfaWQiOjF9.Ih4Ly27HqTrUkRCmOinj-JTvckZGR9teKXwwgFjHWkw	2022-12-08 01:09:42.747813+00	2022-12-09 01:09:42+00	1	47c220b6631a4f2db0a3c2a8d0a19de8
399	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODIxMSwiaWF0IjoxNjcwNDYxODExLCJqdGkiOiJhMGJiYWU0MWI4ZTU0ZjQ5OTY2ZjJmYWIxODVhYWZlNiIsInVzZXJfaWQiOjF9.u-Gdxc13X5CNAgfBz-R95_knw1Zpq6YamZRB2rvi3JI	2022-12-08 01:10:11.807315+00	2022-12-09 01:10:11+00	1	a0bbae41b8e54f49966f2fab185aafe6
400	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODIxMSwiaWF0IjoxNjcwNDYxODExLCJqdGkiOiJjN2RhNTU4OWM2ZWE0ZWYxODA2Yzg1NGY3YzNhNDA5NCIsInVzZXJfaWQiOjF9.bkPqykoTiqeTtwsQ3IOFZbCUMDUuOcI4bKzupVjlqtA	2022-12-08 01:10:11.814599+00	2022-12-09 01:10:11+00	1	c7da5589c6ea4ef1806c854f7c3a4094
401	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODIzNCwiaWF0IjoxNjcwNDYxODM0LCJqdGkiOiIzNTQxOWE4NTQxZGI0ZGM1ODNiMGI2MGMxZmMwOWQ3OSIsInVzZXJfaWQiOjF9.keDZqp0Sosp2NbR72pbfXd_jW5WcG2fjqiTj5idvDJ0	2022-12-08 01:10:34.366383+00	2022-12-09 01:10:34+00	1	35419a8541db4dc583b0b60c1fc09d79
402	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODIzNCwiaWF0IjoxNjcwNDYxODM0LCJqdGkiOiI4NjRlMTA2OGE5ODg0NmM5YjE0ZTg0N2IxZWMzYjdiNyIsInVzZXJfaWQiOjF9.AETQV-CGx-299zidwRmZy61_B07orAXmlPF-Y2Sdm8E	2022-12-08 01:10:34.386594+00	2022-12-09 01:10:34+00	1	864e1068a98846c9b14e847b1ec3b7b7
403	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODM1NCwiaWF0IjoxNjcwNDYxOTU0LCJqdGkiOiIzODljMTIwYjM1OTY0ZjhkYmU4YjE0MDBkODQzNjg1NSIsInVzZXJfaWQiOjF9.5ybe30RZcrglQps73iOwjOnb-xU-49-7tbBLOaeAha8	2022-12-08 01:12:34.515122+00	2022-12-09 01:12:34+00	1	389c120b35964f8dbe8b1400d8436855
404	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODM1NCwiaWF0IjoxNjcwNDYxOTU0LCJqdGkiOiI1OGVlZGE5N2RiZTM0YmIyOTA2MDk0Njg3OWFiN2VlMSIsInVzZXJfaWQiOjF9.QLaml_AAK3fJHnN47jIhoDMDCos5zkn6xTJ-0Dvz7NI	2022-12-08 01:12:34.528955+00	2022-12-09 01:12:34+00	1	58eeda97dbe34bb29060946879ab7ee1
405	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODM2NywiaWF0IjoxNjcwNDYxOTY3LCJqdGkiOiI1MDUzZTNlZmY4ODM0Y2ZmYjU5Yjk4OWZmNWM0OGJhZSIsInVzZXJfaWQiOjF9.sZQLirFvVsh9v8FKwLMQbgbfMiRDTRa-yN8EyIXvBIc	2022-12-08 01:12:47.991492+00	2022-12-09 01:12:47+00	1	5053e3eff8834cffb59b989ff5c48bae
406	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODM2OCwiaWF0IjoxNjcwNDYxOTY4LCJqdGkiOiI5NjMwMzNlOTQyYzI0MjUzYWIxODI2ZDUwZmQ2MTg3YyIsInVzZXJfaWQiOjF9.P-6J7SmgQgKali-AurXewABfOJwMochtR1UzFY3c4YE	2022-12-08 01:12:48.006808+00	2022-12-09 01:12:48+00	1	963033e942c24253ab1826d50fd6187c
407	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODM3NywiaWF0IjoxNjcwNDYxOTc3LCJqdGkiOiJmZjQyMGFjYWMwOWU0Y2ZjYmQ2NmYxMjA1MDcyNmNiNyIsInVzZXJfaWQiOjF9.gIxpI4wm9c_2zaE_z3ujjD7sBCzd_JNIo89Ez2e3I0o	2022-12-08 01:12:57.193444+00	2022-12-09 01:12:57+00	1	ff420acac09e4cfcbd66f12050726cb7
408	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODM3NywiaWF0IjoxNjcwNDYxOTc3LCJqdGkiOiJkNzhhZmE4Mjc4Njg0Zjg1YjJjZGNmYjlmYWY2ZGRmOCIsInVzZXJfaWQiOjF9.HmSHBtrYpyPzQG5ED5wO1Rj5oMGrqylwSAqkZTSuzqg	2022-12-08 01:12:57.199987+00	2022-12-09 01:12:57+00	1	d78afa8278684f85b2cdcfb9faf6ddf8
409	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODgxNywiaWF0IjoxNjcwNDYyNDE3LCJqdGkiOiI2MTdiYWVhZDZkZGI0Y2FhOGMzMzZiMjI0YTRkMGYwZCIsInVzZXJfaWQiOjZ9.HIhxxv-vWomWK7HS0ZCeKv60jlUApZsXcdVZH2p9zDQ	2022-12-08 01:20:17.308731+00	2022-12-09 01:20:17+00	6	617baead6ddb4caa8c336b224a4d0f0d
410	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODgxNywiaWF0IjoxNjcwNDYyNDE3LCJqdGkiOiIzOWViNjlkNmIzYTc0ZDI2YjIyODQ2NTZkMjg3NzA4NiIsInVzZXJfaWQiOjZ9.KFkPUhp-w9AjvMGQsMEZf2J-6BbXx-ObHcOKKvlMtjs	2022-12-08 01:20:17.317039+00	2022-12-09 01:20:17+00	6	39eb69d6b3a74d26b2284656d2877086
411	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODgzMCwiaWF0IjoxNjcwNDYyNDMwLCJqdGkiOiJlOWEzY2RlNjJlMmI0N2IyODU0MTZkY2Q3Y2E5YTY0YyIsInVzZXJfaWQiOjV9.MJeEAIJ0BP-GbMercF1FFniB-1ATkDEZlTRjNKyeNg8	2022-12-08 01:20:30.871465+00	2022-12-09 01:20:30+00	5	e9a3cde62e2b47b285416dcd7ca9a64c
412	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODgzMCwiaWF0IjoxNjcwNDYyNDMwLCJqdGkiOiJhODYzMTAzODMwNWY0YTk0YTI4MDVlODE2ZGMxM2Y2ZiIsInVzZXJfaWQiOjV9.YwaqfH4Fr0rQhRGqFkn6NusLVcN-yzFGaxXesjh1DMQ	2022-12-08 01:20:30.87918+00	2022-12-09 01:20:30+00	5	a8631038305f4a94a2805e816dc13f6f
413	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODg2MiwiaWF0IjoxNjcwNDYyNDYyLCJqdGkiOiJhZjEyNjdlMzNmMDA0YmJhYWI3MzRjMjUyMDY3NDJmNyIsInVzZXJfaWQiOjV9.4IiBfhsq0UAiBqUL1bNxxiHaZF2OEIDuzhyFFgW0g4Q	2022-12-08 01:21:02.806454+00	2022-12-09 01:21:02+00	5	af1267e33f004bbaab734c25206742f7
414	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODg2MiwiaWF0IjoxNjcwNDYyNDYyLCJqdGkiOiI5Y2E4ZTY0NzUwNDQ0YmNmYTY5ZDExYWY0ODQyYTBmMCIsInVzZXJfaWQiOjV9.BZKhQMKx9Gveouq0FMurcVoEaStHcDI4PdPMZcBVMKk	2022-12-08 01:21:02.817848+00	2022-12-09 01:21:02+00	5	9ca8e64750444bcfa69d11af4842a0f0
415	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODkyMSwiaWF0IjoxNjcwNDYyNTIxLCJqdGkiOiIzOWQ3ZjA3NmJkMTg0M2I5OTA2ZWUyYjMwMDdhZDkwNCIsInVzZXJfaWQiOjF9.u1zXL3uP5goOnRzDNNziVOyEd6glN9SVZ8dDvyjKYOI	2022-12-08 01:22:01.26957+00	2022-12-09 01:22:01+00	1	39d7f076bd1843b9906ee2b3007ad904
416	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0ODkyMSwiaWF0IjoxNjcwNDYyNTIxLCJqdGkiOiJkM2ZlZmRhZTAxNzQ0OWMyOTJlYjQyYTFiZTliNWNiYyIsInVzZXJfaWQiOjF9.zVYE1isnqbI3CihE-cTF4uCJR5M3Dlfo97APmlc8IoY	2022-12-08 01:22:01.276686+00	2022-12-09 01:22:01+00	1	d3fefdae017449c292eb42a1be9b5cbc
417	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0OTA4NywiaWF0IjoxNjcwNDYyNjg3LCJqdGkiOiI1NTJkYTFkY2JlNjg0MTk0ODk0NjAyNmY2YmMwNTQxZCIsInVzZXJfaWQiOjF9.mN7Y-uu6mHicN7YHbsrWnOu-CcEvC5_Hn4rO6qgHsxg	2022-12-08 01:24:47.602683+00	2022-12-09 01:24:47+00	1	552da1dcbe6841948946026f6bc0541d
418	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0OTA4NywiaWF0IjoxNjcwNDYyNjg3LCJqdGkiOiJjMTU1ZjBhYjVhYzE0NTE2YmZkMDJlZGI0Nzc2M2M2YiIsInVzZXJfaWQiOjF9.UBlT_6VaN1J1nywkpFLFMXnwueaap878XQuge_zqi2o	2022-12-08 01:24:47.612787+00	2022-12-09 01:24:47+00	1	c155f0ab5ac14516bfd02edb47763c6b
419	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0OTExOSwiaWF0IjoxNjcwNDYyNzE5LCJqdGkiOiIzMDgxZDRlOWU1OWU0MDg2YjNiNWJmODJkOGNkMjczZSIsInVzZXJfaWQiOjV9.4nxBNjTzsN1bLMMMKU2BS5Z97uCVun6io_BT5xaapLc	2022-12-08 01:25:19.480746+00	2022-12-09 01:25:19+00	5	3081d4e9e59e4086b3b5bf82d8cd273e
420	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0OTExOSwiaWF0IjoxNjcwNDYyNzE5LCJqdGkiOiI5YjFiNGU4Y2U3N2I0YTRmYTVkOTAwNDMyOTE1MDVlYiIsInVzZXJfaWQiOjV9.yGW3F4Z8V9IHMJqX21yeiCnJ-zLCkSsOErAQn63nPss	2022-12-08 01:25:19.496251+00	2022-12-09 01:25:19+00	5	9b1b4e8ce77b4a4fa5d90043291505eb
421	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0OTM2NCwiaWF0IjoxNjcwNDYyOTY0LCJqdGkiOiI4MThhNGU4MjJhNzM0OWFjOTRjOWVhOTM2ZTk1NmJjZiIsInVzZXJfaWQiOjV9.IH3QE9b0GZTIDCuHgp-QZn_mZU9QH3b3kZQWiq8axH8	2022-12-08 01:29:24.597139+00	2022-12-09 01:29:24+00	5	818a4e822a7349ac94c9ea936e956bcf
422	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0OTM2NCwiaWF0IjoxNjcwNDYyOTY0LCJqdGkiOiJiMTc5YWJhOGM3OGU0YzliYjM0NzYzNjkxNDgwM2EwMSIsInVzZXJfaWQiOjV9.z1yc8B2treJJW1yeFtVfay59DDqIpysFsD8asRFMBak	2022-12-08 01:29:24.60896+00	2022-12-09 01:29:24+00	5	b179aba8c78e4c9bb347636914803a01
423	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0OTQwMSwiaWF0IjoxNjcwNDYzMDAxLCJqdGkiOiJiZTgwODY4MWJmNDk0MGI5YTYyNDA0MzNiMjY0OTFjNiIsInVzZXJfaWQiOjZ9.ZfnUHYJ5RdAVF7ro2hIR00vG2cUORbXZX9bicrV7DIk	2022-12-08 01:30:01.55548+00	2022-12-09 01:30:01+00	6	be808681bf4940b9a6240433b26491c6
424	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0OTQwMSwiaWF0IjoxNjcwNDYzMDAxLCJqdGkiOiIyZjI2NTAyMmUyNGQ0ODM2YTU3YzhmMjg2YzM5ZDljNCIsInVzZXJfaWQiOjZ9.zgwAN0mlRJoa-Rw-J8R8l2nehWZnnYGeXGd70L0ODak	2022-12-08 01:30:01.563153+00	2022-12-09 01:30:01+00	6	2f265022e24d4836a57c8f286c39d9c4
425	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0OTUzMCwiaWF0IjoxNjcwNDYzMTMwLCJqdGkiOiJmMjNlYzViNzZkMWU0ODQxOTM3MWNmYmU4MmNiZWYzOCIsInVzZXJfaWQiOjV9.HGZUo-YbMHyEZ6cL6GiHBXMYcL-nFwRsr0pLDwj__1M	2022-12-08 01:32:10.522588+00	2022-12-09 01:32:10+00	5	f23ec5b76d1e48419371cfbe82cbef38
426	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0OTUzMCwiaWF0IjoxNjcwNDYzMTMwLCJqdGkiOiI1YTZmNjA2N2FmNjM0ZjE3YmE4OWViNGFjOTQ3MDQ5OCIsInVzZXJfaWQiOjV9.py0nkZA1uRZbEXIWx-w_M3NC9R6iByqZEM8Y-tzitbQ	2022-12-08 01:32:10.534808+00	2022-12-09 01:32:10+00	5	5a6f6067af634f17ba89eb4ac9470498
427	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0OTc0MiwiaWF0IjoxNjcwNDYzMzQyLCJqdGkiOiI3YjMwZDNmYTE1YTU0NjVhYTY0ZjgwZmQ0NjJjNDdhYiIsInVzZXJfaWQiOjZ9.m23OYr2ZhsvMDbvju1_A5S-Ti82RjOtBqeMYIIyA6ME	2022-12-08 01:35:42.670479+00	2022-12-09 01:35:42+00	6	7b30d3fa15a5465aa64f80fd462c47ab
428	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU0OTc0MiwiaWF0IjoxNjcwNDYzMzQyLCJqdGkiOiIxYjVhZDBjZjc5N2Q0ZWYzYThiZDk2ZjczNjE4NWUyMCIsInVzZXJfaWQiOjZ9.MfBg3kWzXd5rgvZrUWkpEON0MMKNFJea9iBhDSKNP7c	2022-12-08 01:35:42.684627+00	2022-12-09 01:35:42+00	6	1b5ad0cf797d4ef3a8bd96f736185e20
429	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU2MzIxNCwiaWF0IjoxNjcwNDc2ODE0LCJqdGkiOiIwMzcyZjM3OWVlZDE0NDcwOWM2ZDQwZDk4OWExYzQ0NSIsInVzZXJfaWQiOjV9.2OtoAvP6gbbKkRVN0WKzVo4Er0pQ1-nmW4HMPOoY2Gc	2022-12-08 05:20:14.388416+00	2022-12-09 05:20:14+00	5	0372f379eed144709c6d40d989a1c445
430	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU2MzIxNCwiaWF0IjoxNjcwNDc2ODE0LCJqdGkiOiI1OGNkNTBlMTEwZDQ0YWM2YWQyYTg3ZTBlODY2OWUzNyIsInVzZXJfaWQiOjV9.jOu51u3fG75USRWqQuIN5p0FLRCR30B44JJ0GjJ8gl4	2022-12-08 05:20:14.413789+00	2022-12-09 05:20:14+00	5	58cd50e110d44ac6ad2a87e0e8669e37
431	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU2MzIyNCwiaWF0IjoxNjcwNDc2ODI0LCJqdGkiOiI3Nzg4NWViNTFmNWI0MjYxODNhNzU4NmEwNjUyMmZiMSIsInVzZXJfaWQiOjF9.WPgfbpO6RysdkDu922Gg0vp-FzlgPV9PVfAhUwECcVc	2022-12-08 05:20:24.335211+00	2022-12-09 05:20:24+00	1	77885eb51f5b426183a7586a06522fb1
432	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU2MzIyNCwiaWF0IjoxNjcwNDc2ODI0LCJqdGkiOiI0ZGI2NTA0ZGZjOGI0Y2U0OWIxNjFkYjFlZTVkOWZhMiIsInVzZXJfaWQiOjF9.G3GWCsAct6ryY47SaPgCoOzxUIKDI6J8sjBJQoyOODU	2022-12-08 05:20:24.343146+00	2022-12-09 05:20:24+00	1	4db6504dfc8b4ce49b161db1ee5d9fa2
433	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU3MjY4MywiaWF0IjoxNjcwNDg2MjgzLCJqdGkiOiI4OGEzYWIxOGQwM2E0YWZiYWFkNmM5MGEzMjBkNDBlNSIsInVzZXJfaWQiOjN9.eR6wwmHh8k24-btKPtrNW1kPHTeOXTYg0DSwZtsrVxU	2022-12-08 07:58:03.147426+00	2022-12-09 07:58:03+00	3	88a3ab18d03a4afbaad6c90a320d40e5
434	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU3MjY4MywiaWF0IjoxNjcwNDg2MjgzLCJqdGkiOiJhZDU0YWZhNjVmYjc0NjgxYTFjYmY3MDI5NzZlMDZiZCIsInVzZXJfaWQiOjN9.2YkWeTqAHhMra1LMyKBeebtCBRnUs91PYH6D0xfhmLQ	2022-12-08 07:58:03.167031+00	2022-12-09 07:58:03+00	3	ad54afa65fb74681a1cbf702976e06bd
435	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU3Mjk1NywiaWF0IjoxNjcwNDg2NTU3LCJqdGkiOiI2NDAwNWZmMjA0YmM0MDE4YjliMjk2NzZjYzBiNGIzZSIsInVzZXJfaWQiOjZ9.756K49uNO_NLZlYNNhhnkLYpNlFjN81x8op_cUdtT-Y	2022-12-08 08:02:37.201112+00	2022-12-09 08:02:37+00	6	64005ff204bc4018b9b29676cc0b4b3e
436	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU3Mjk1NywiaWF0IjoxNjcwNDg2NTU3LCJqdGkiOiI1OTFjMmQ0ZDgxZDI0ZjU3YWE0NGNiN2EzN2FkYmNlOSIsInVzZXJfaWQiOjZ9.Ws7pfyKXJERMohd1qDoFJaXNMiCETEfGqSHwa4Lq6G4	2022-12-08 08:02:37.213173+00	2022-12-09 08:02:37+00	6	591c2d4d81d24f57aa44cb7a37adbce9
437	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU3MzQxNSwiaWF0IjoxNjcwNDg3MDE1LCJqdGkiOiJlNDVjYmQ2ZDAwNGY0MTI1OGVhMzA5M2EzNTBmNWQ4YSIsInVzZXJfaWQiOjh9.fVIHzDPADi4iRkF0T_SkxgnDrB9QxeHi8Jys481f_LI	2022-12-08 08:10:15.090789+00	2022-12-09 08:10:15+00	8	e45cbd6d004f41258ea3093a350f5d8a
438	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU3MzQxNSwiaWF0IjoxNjcwNDg3MDE1LCJqdGkiOiJiOWYyNWI0NzE4Yjc0OTJiYWQ0MTE0OTQ4NzA0M2ExOCIsInVzZXJfaWQiOjh9.7JSd3TPboHsKwmRIpuj6qqBcNQcMdUqqP9bCRWrR8t8	2022-12-08 08:10:15.09837+00	2022-12-09 08:10:15+00	8	b9f25b4718b7492bad41149487043a18
439	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU3NDMyNiwiaWF0IjoxNjcwNDg3OTI2LCJqdGkiOiIzYzQzZGIyNjYxOTM0NmY3YmU5Y2M2ZWRhZWUyNGRjZCIsInVzZXJfaWQiOjF9.GL1Z7CGWEIDG5tB5IWRF8-6YD9pvdgOS4xw4ru0PQmM	2022-12-08 08:25:26.620819+00	2022-12-09 08:25:26+00	1	3c43db26619346f7be9cc6edaee24dcd
440	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU3NDMyNiwiaWF0IjoxNjcwNDg3OTI2LCJqdGkiOiI5ZDFhZjhiZTMxZWY0YTYwOGE4OWU5YjdjMmIwMDcyYiIsInVzZXJfaWQiOjF9.uJn-yACKBm6UXTPTKeMl5naXalX7F4tc81Skg_EfAV0	2022-12-08 08:25:26.630603+00	2022-12-09 08:25:26+00	1	9d1af8be31ef4a608a89e9b7c2b0072b
441	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU3NDY5OSwiaWF0IjoxNjcwNDg4Mjk5LCJqdGkiOiJkZjQxNWVkNjY1NzE0ODMyYWQxZWYzNTcyMDc3MDQ2NCIsInVzZXJfaWQiOjF9.1oXTTOlUR16OOmu6IhynyrICBOo-SXjPwrxcUHVXZ0c	2022-12-08 08:31:39.190498+00	2022-12-09 08:31:39+00	1	df415ed665714832ad1ef35720770464
442	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU3NDY5OSwiaWF0IjoxNjcwNDg4Mjk5LCJqdGkiOiIwMzJmNTY1MDFlYmE0MmI1OGIyYjI2MmI4M2UxNjk2YiIsInVzZXJfaWQiOjF9.dvok_hHZeAQeYaMITTkyU8NUnyLlP6OsbjNwNhpBgCg	2022-12-08 08:31:39.205313+00	2022-12-09 08:31:39+00	1	032f56501eba42b58b2b262b83e1696b
443	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU3NDkyOCwiaWF0IjoxNjcwNDg4NTI4LCJqdGkiOiI3ZGRkNjdmMDEyYTg0ZGZmYWIyMTJkMGNjZjhhZTQzNyIsInVzZXJfaWQiOjh9.7XKrcOshyQgRLJ8mitsIm1Bg73J95DMymiLTnQI1mtc	2022-12-08 08:35:28.435609+00	2022-12-09 08:35:28+00	8	7ddd67f012a84dffab212d0ccf8ae437
444	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU3NDkyOCwiaWF0IjoxNjcwNDg4NTI4LCJqdGkiOiJmNWM2NWQzYTkwMTk0NGUzOGVkOWFiNzU1ZGVhMTJlMCIsInVzZXJfaWQiOjh9.pP_f8YIVdVeJ50v5nrdcdRQV8tqzIUqQq30Xfo9SKEs	2022-12-08 08:35:28.554796+00	2022-12-09 08:35:28+00	8	f5c65d3a901944e38ed9ab755dea12e0
445	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU3OTEwNywiaWF0IjoxNjcwNDkyNzA3LCJqdGkiOiI1ZWE4ZGUzYjZiMzQ0ZGZmODljYzk4MGZlN2ExOTNhMSIsInVzZXJfaWQiOjV9.C6z8ftAmf6V6-CpnrjaxjEs6v4qztdf6F7W8HNgkjhk	2022-12-08 09:45:07.270894+00	2022-12-09 09:45:07+00	5	5ea8de3b6b344dff89cc980fe7a193a1
446	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU3OTEwNywiaWF0IjoxNjcwNDkyNzA3LCJqdGkiOiIxYzM3ZGI3NTVhNjU0YWY2ODY1ODFiNGIyNDczNmVjYyIsInVzZXJfaWQiOjV9.O_vXk2RvmXGgdag8b8QBk_LVRngE4nnHDj3Re8tcs-Y	2022-12-08 09:45:07.285624+00	2022-12-09 09:45:07+00	5	1c37db755a654af686581b4b24736ecc
447	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU4MTAxMSwiaWF0IjoxNjcwNDk0NjExLCJqdGkiOiIyZjY5MjY0Njc4ZDQ0NmRiYTY2NGM2OWZhZTRiYjg2OSIsInVzZXJfaWQiOjF9.giTNnZ14PA-qmLUX2QOF8lCZ_3NYz9gsJhf-_RA7cAY	2022-12-08 10:16:51.625562+00	2022-12-09 10:16:51+00	1	2f69264678d446dba664c69fae4bb869
448	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU4MTAxMSwiaWF0IjoxNjcwNDk0NjExLCJqdGkiOiI2OGJjM2VlNTY2Y2M0YjM5YjYwZDJlZWYwZGQ1OTc1YyIsInVzZXJfaWQiOjF9.AqHY-E1XG4DgpwtI13O1aNqVCy6hsP7DtC7IKjApnTw	2022-12-08 10:16:51.632612+00	2022-12-09 10:16:51+00	1	68bc3ee566cc4b39b60d2eef0dd5975c
449	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU4MTAyMiwiaWF0IjoxNjcwNDk0NjIyLCJqdGkiOiJjNjQ1NGYwODg1OTg0YjQ0ODc0Yzk0ODQwMjRkZDcxZSIsInVzZXJfaWQiOjV9.OZye6koE_GAez3q6CwRRd04CNJGpI4lHVvInA8Dr5ic	2022-12-08 10:17:02.844222+00	2022-12-09 10:17:02+00	5	c6454f0885984b44874c9484024dd71e
450	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU4MTAyMiwiaWF0IjoxNjcwNDk0NjIyLCJqdGkiOiIzOGViYTA1MDUxY2E0YjBkOTI1N2QxYzljNDNmOTg3ZiIsInVzZXJfaWQiOjV9.ph6hxG2bEtdD34y4VWoXpHCFiidYiAGC4OmnBwN87IA	2022-12-08 10:17:02.854011+00	2022-12-09 10:17:02+00	5	38eba05051ca4b0d9257d1c9c43f987f
451	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU4MTUwMCwiaWF0IjoxNjcwNDk1MTAwLCJqdGkiOiI5NjUwZjY4YjdmOTg0ZWJlYWMyNDZjNTE3NmI0MWM2MiIsInVzZXJfaWQiOjF9.tbRRW55TPMSF2QwJR1zZLmvIsZWddh8ffu8hZ5_Rwjo	2022-12-08 10:25:00.285686+00	2022-12-09 10:25:00+00	1	9650f68b7f984ebeac246c5176b41c62
452	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU4MTUwMCwiaWF0IjoxNjcwNDk1MTAwLCJqdGkiOiIyNzhjZDBjNmZjMjI0MDEzYWRiYTg2MGUzOTE0ZGE3ZCIsInVzZXJfaWQiOjF9.klT9QBQru1fESsX27ugNlfm7FeeudNT-aLc1WSFd4t8	2022-12-08 10:25:00.30609+00	2022-12-09 10:25:00+00	1	278cd0c6fc224013adba860e3914da7d
453	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU4MTkzOSwiaWF0IjoxNjcwNDk1NTM5LCJqdGkiOiJkZDlkMTVmM2JhZTU0MTAzYTcwMjA2MWY5ZDE1NDhkMiIsInVzZXJfaWQiOjV9.XSyZouMuxEcBgxyIIBsRJ41juf0op3nUcKTgcn3eeEo	2022-12-08 10:32:19.276597+00	2022-12-09 10:32:19+00	5	dd9d15f3bae54103a702061f9d1548d2
454	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU4MTkzOSwiaWF0IjoxNjcwNDk1NTM5LCJqdGkiOiIxNGVkZWQ3YjdkNjU0ZTBmOWMxMGU2YmE3NTZjNTY4NCIsInVzZXJfaWQiOjV9.5XMy9Y_sMTVPfwX49vsZirMfTI23cbB44kfFdg1WCkU	2022-12-08 10:32:19.285931+00	2022-12-09 10:32:19+00	5	14eded7b7d654e0f9c10e6ba756c5684
455	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU4MzEyMywiaWF0IjoxNjcwNDk2NzIzLCJqdGkiOiJmZTFiY2ZkZTdkOTM0ZmJkYWU2NWM3YTIzZjM2MzE4NyIsInVzZXJfaWQiOjV9.Tx65k06GLDqXdriVcJhjIc4COXzyvqvkUteCJ5NAJH0	2022-12-08 10:52:03.120962+00	2022-12-09 10:52:03+00	5	fe1bcfde7d934fbdae65c7a23f363187
456	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU4MzEyMywiaWF0IjoxNjcwNDk2NzIzLCJqdGkiOiIxMjk5NjMwNDUzNmU0OTUzYTQ5MmQyYWVlYmI2YWZkYyIsInVzZXJfaWQiOjV9.pVJIapV9jtG9PWq54mnSFkScpdit1-5nt3pBXB_jGuk	2022-12-08 10:52:03.133037+00	2022-12-09 10:52:03+00	5	12996304536e4953a492d2aeebb6afdc
457	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU4NDg4NywiaWF0IjoxNjcwNDk4NDg3LCJqdGkiOiI5ZjBjZjVlZTBmYTI0OTA0OGI5OTk0MTcxZWE2OTgxZCIsInVzZXJfaWQiOjh9.RXBhOGITgA6moC8Z9nbhQwjKrwhj8tibrvuDUY9NHic	2022-12-08 11:21:27.275665+00	2022-12-09 11:21:27+00	8	9f0cf5ee0fa249048b9994171ea6981d
458	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDU4NDg4NywiaWF0IjoxNjcwNDk4NDg3LCJqdGkiOiI0N2QyNjg4NTk3MWM0MzE2ODM1ZDBjY2I3MjJiNWI5YiIsInVzZXJfaWQiOjh9.K3afF7hPBjo1dHePrOLfS11qlKSSyBCOFHtBrg2S1xc	2022-12-08 11:21:27.285339+00	2022-12-09 11:21:27+00	8	47d26885971c4316835d0ccb722b5b9b
490	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDYzOTQ3MywiaWF0IjoxNjcwNTUzMDczLCJqdGkiOiJmMmMxYWY1MjNjZGY0Nzg4YTU2ZWEzOTBkNzczM2RmMyIsInVzZXJfaWQiOjZ9.3AZ9p-mpeikFizlAMeq--vF1uCsbv3KXlMfJ-Bblnfo	2022-12-09 02:31:13.887461+00	2022-12-10 02:31:13+00	6	f2c1af523cdf4788a56ea390d7733df3
491	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDYzOTQ3NCwiaWF0IjoxNjcwNTUzMDc0LCJqdGkiOiIzOWU4OTJlMDJkMjc0NTI0OGIxNDM5Njc2NWFmNzNkMiIsInVzZXJfaWQiOjZ9.QDFkvsciYXCzIpxktndEwn-naVR6zL-JxlT4wuOK1Zw	2022-12-09 02:31:14.007+00	2022-12-10 02:31:14+00	6	39e892e02d2745248b14396765af73d2
492	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDYzOTU3MywiaWF0IjoxNjcwNTUzMTczLCJqdGkiOiJmNDRmZjk4ZjAxZmU0Mzg3YWJkMzk3MDUxY2EwMDU5ZSIsInVzZXJfaWQiOjV9.NJhk9eHT2g9f2UG5qEiuxX1HdcTO-ItSux0UnbYd7Es	2022-12-09 02:32:53.695102+00	2022-12-10 02:32:53+00	5	f44ff98f01fe4387abd397051ca0059e
493	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDYzOTU3MywiaWF0IjoxNjcwNTUzMTczLCJqdGkiOiJmYjlkMWJjZmY1NzM0YmE1OGJjOWNlMmQwYWU0NWIyOCIsInVzZXJfaWQiOjV9.I8-TB4WbgYrxW32qZfVxGSIjqAYIH0VJUHv7e-emFhI	2022-12-09 02:32:53.706228+00	2022-12-10 02:32:53+00	5	fb9d1bcff5734ba58bc9ce2d0ae45b28
494	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1MjUwNCwiaWF0IjoxNjcwNTY2MTA0LCJqdGkiOiI2NzlmMzk4ODQzZmM0ODk4YjM5N2ZlNTEwZGE2ZDdkNCIsInVzZXJfaWQiOjN9.D22ELanAG0CID2Tvq4i3bpRZ-Q28QMH5mDhwd0vv67o	2022-12-09 06:08:24.115824+00	2022-12-10 06:08:24+00	3	679f398843fc4898b397fe510da6d7d4
495	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1MjUwNCwiaWF0IjoxNjcwNTY2MTA0LCJqdGkiOiIwOWNhOThmMDk4NmY0ZTdlYmQzOTc3YTlhNjcyODM1MCIsInVzZXJfaWQiOjN9.hE2Tz-NqjezaEl3EAv9Bj75XRBi3pIYr8e9LV0fqMdo	2022-12-09 06:08:24.128461+00	2022-12-10 06:08:24+00	3	09ca98f0986f4e7ebd3977a9a6728350
496	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1Mjk0OSwiaWF0IjoxNjcwNTY2NTQ5LCJqdGkiOiI4YWY0YTRjZmMwNTU0NmI2ODBmNTY1Nzc5ZDBkMTI3YyIsInVzZXJfaWQiOjExfQ.-dF7F6mtnP6dsOe_B77VMHr-aWhyEPigkb77cw1_bSg	2022-12-09 06:15:49.298631+00	2022-12-10 06:15:49+00	11	8af4a4cfc05546b680f565779d0d127c
497	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1Mjk2MywiaWF0IjoxNjcwNTY2NTYzLCJqdGkiOiJhMWQ5Y2YyMzJmYWE0MzgyOTRkMzQyZDU5ODJhNzQwNSIsInVzZXJfaWQiOjEzfQ.cPtdhiVsPFOdYo1RJluLqdXfqAibZlk2rwWCXiHZoLE	2022-12-09 06:16:03.230677+00	2022-12-10 06:16:03+00	13	a1d9cf232faa438294d342d5982a7405
498	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1Mjk3NywiaWF0IjoxNjcwNTY2NTc3LCJqdGkiOiJkYmE1NDhiMDI3ZGU0ZmViYjc4MTVlZTIzN2U5MTkyMyIsInVzZXJfaWQiOjE0fQ.YDQYTRB3GSTiTg_v5ZHAE32D__OmTx_lGWG94-P82uM	2022-12-09 06:16:17.792479+00	2022-12-10 06:16:17+00	14	dba548b027de4febb7815ee237e91923
499	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1Mjk5NSwiaWF0IjoxNjcwNTY2NTk1LCJqdGkiOiI2MDNlMzM4YTk3Zjk0N2NiYjljNTJjNjE3YzY5YzU2MCIsInVzZXJfaWQiOjE2fQ.qGzvV7n3dSC1f2g9JsWlWEkyflabHJ91eC5EfF2IqME	2022-12-09 06:16:35.301029+00	2022-12-10 06:16:35+00	16	603e338a97f947cbb9c52c617c69c560
500	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1MzAxMSwiaWF0IjoxNjcwNTY2NjExLCJqdGkiOiJiZDk0NmUzZjk5OTI0ZmE3YmEyZTk1OTVhYTAxM2EwNyIsInVzZXJfaWQiOjE3fQ.lT1-8cfRJe46IOyTxASMgiwpOXmoFH2Rafp33tZZJAg	2022-12-09 06:16:51.851847+00	2022-12-10 06:16:51+00	17	bd946e3f99924fa7ba2e9595aa013a07
501	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1MzAzMSwiaWF0IjoxNjcwNTY2NjMxLCJqdGkiOiJmYTc2NGU0YTNiMDY0YThlODZkZTFjZGNhMWRkMDliZSIsInVzZXJfaWQiOjE4fQ.9XPlt9H2_Ft29gz-VNuP2zWClpy3dbLyDn1j2hiFEEw	2022-12-09 06:17:11.733692+00	2022-12-10 06:17:11+00	18	fa764e4a3b064a8e86de1cdca1dd09be
502	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1MzA0MywiaWF0IjoxNjcwNTY2NjQzLCJqdGkiOiJiMjUyNTNiODMwMjA0NzdiODAyM2ZjZTkzOWIxODFhMyIsInVzZXJfaWQiOjF9.MDNxNl3nIZUJRWWDS8JCdQETlQmwg268lGuQ2OBbZCU	2022-12-09 06:17:23.759878+00	2022-12-10 06:17:23+00	1	b25253b83020477b8023fce939b181a3
503	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1MzA0MywiaWF0IjoxNjcwNTY2NjQzLCJqdGkiOiI1ODk1Mzk4NDVmYjI0ZDM1ODgyMTNkZjhmNzY1MGQwZCIsInVzZXJfaWQiOjF9.Q6PhpdXSzq2whUSeDyiaCwKkzpHXEClfVoHKYmn6UTg	2022-12-09 06:17:23.767671+00	2022-12-10 06:17:23+00	1	589539845fb24d3588213df8f7650d0d
504	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NDA1OSwiaWF0IjoxNjcwNTY3NjU5LCJqdGkiOiJhNjU1MzI4ZmE1M2Q0ZTc1OWRkZGUxZmIyMTc5NGI3NSIsInVzZXJfaWQiOjEzfQ.UPHpu0k8r9E4u2JvZwF-bcbaVpNO9pB9Jvz6z1PDZL8	2022-12-09 06:34:19.808895+00	2022-12-10 06:34:19+00	13	a655328fa53d4e759ddde1fb21794b75
505	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NDA1OSwiaWF0IjoxNjcwNTY3NjU5LCJqdGkiOiI0N2FhYTc2Y2UzZmI0NWU3YmIyYjRjMzlhNGVlNGYwMyIsInVzZXJfaWQiOjEzfQ.TOvFYbysvN2q_UJbFb97mjvw1T93c1uPi2PSITOLdts	2022-12-09 06:34:19.816084+00	2022-12-10 06:34:19+00	13	47aaa76ce3fb45e7bb2b4c39a4ee4f03
506	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NTcwNiwiaWF0IjoxNjcwNTY5MzA2LCJqdGkiOiJlNjAwZjkyNjEzNmM0YTVhYTdmM2E4MDBjZjJmZjU3MiIsInVzZXJfaWQiOjF9.PkpskwaqCy6E1xn5s052aJwF8dXGmw5U76mW8KrWVdE	2022-12-09 07:01:46.7917+00	2022-12-10 07:01:46+00	1	e600f926136c4a5aa7f3a800cf2ff572
507	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NTcwNiwiaWF0IjoxNjcwNTY5MzA2LCJqdGkiOiI4MGQwYzdkZTUxYWE0YTdlOGNiNjhjN2ZmNDhhZTk2NSIsInVzZXJfaWQiOjF9.ZwhinSmgEuCxHxRxmUDis0KEYRheM9ysXk-OSmGvyb4	2022-12-09 07:01:46.80698+00	2022-12-10 07:01:46+00	1	80d0c7de51aa4a7e8cb68c7ff48ae965
508	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NTc0OCwiaWF0IjoxNjcwNTY5MzQ4LCJqdGkiOiIwYzhjZWMzOGQwNmE0ZDQyOWQ0OTZjMjUxZGVlNDk3MCIsInVzZXJfaWQiOjEzfQ.Pjne3wh3J699OeMvLgM6OYxjrHRBIMBBF1PqtjU-Ghw	2022-12-09 07:02:28.538164+00	2022-12-10 07:02:28+00	13	0c8cec38d06a4d429d496c251dee4970
509	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NTc0OCwiaWF0IjoxNjcwNTY5MzQ4LCJqdGkiOiJkNzE0MGRkMzkyNDc0YjhjOTIxNmYwYzQ2MTRiM2NkNyIsInVzZXJfaWQiOjEzfQ.tn2Q56EHshMfVvQEFeyqDCShYwOtu17te7G1NHrE5qg	2022-12-09 07:02:28.555404+00	2022-12-10 07:02:28+00	13	d7140dd392474b8c9216f0c4614b3cd7
510	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NjA2OCwiaWF0IjoxNjcwNTY5NjY4LCJqdGkiOiJlYWNlOTQ3MmI0YzE0ZWY1OWJmNTQxZDFjMTczNzVhNyIsInVzZXJfaWQiOjF9.65bS2Ghgp9hMpjc80aduP2Ngh3adL6DYx7fTX-84ZeY	2022-12-09 07:07:48.203635+00	2022-12-10 07:07:48+00	1	eace9472b4c14ef59bf541d1c17375a7
511	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NjA2OCwiaWF0IjoxNjcwNTY5NjY4LCJqdGkiOiJmMjVjYzk2YTAyMGQ0MWNmYWFiOTg4NWU2MmMxZGE5ZSIsInVzZXJfaWQiOjF9.tS5BC52JURIChMDMU92kYJUJxCALE3pRb-ztkLQlnSs	2022-12-09 07:07:48.215428+00	2022-12-10 07:07:48+00	1	f25cc96a020d41cfaab9885e62c1da9e
512	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NjQ5OCwiaWF0IjoxNjcwNTcwMDk4LCJqdGkiOiI2ZDVjZjg2Y2E4Y2Q0ZWIwYTQzZGJlOTlkNDBjOGQ1YiIsInVzZXJfaWQiOjEzfQ.Trh992OXfbWZQV9bzqB3ngekOv6zRN9xUiJyMuYm0vg	2022-12-09 07:14:58.946715+00	2022-12-10 07:14:58+00	13	6d5cf86ca8cd4eb0a43dbe99d40c8d5b
513	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NjQ5OCwiaWF0IjoxNjcwNTcwMDk4LCJqdGkiOiI3MmI2YjAzNWNhNmI0NzNkOTI2MjdhM2NmNzFjNWExZSIsInVzZXJfaWQiOjEzfQ.P1EcF_3oT28hE1Iv28c5Wrawz-d6wnsh4z07Q8PAUH4	2022-12-09 07:14:58.958323+00	2022-12-10 07:14:58+00	13	72b6b035ca6b473d92627a3cf71c5a1e
514	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NjU0NSwiaWF0IjoxNjcwNTcwMTQ1LCJqdGkiOiJmNTMyMzM5OThiZWM0ZDcyODE1ZGY2MWNhZDMwNmRiYiIsInVzZXJfaWQiOjE0fQ.T33Ou7X7FdshxoriU499BuU6Fq_6_C1uVaAa5dDA7yE	2022-12-09 07:15:45.382683+00	2022-12-10 07:15:45+00	14	f53233998bec4d72815df61cad306dbb
515	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NjU0NSwiaWF0IjoxNjcwNTcwMTQ1LCJqdGkiOiIyZDU2ZTk5ODVlZTM0Y2Y2YTU2ZjhlZWEwNWJlYmFjNiIsInVzZXJfaWQiOjE0fQ.NNevPxsSX0VfGRMSB46O3DN-5P9Emp05_ybhkf0f754	2022-12-09 07:15:45.400968+00	2022-12-10 07:15:45+00	14	2d56e9985ee34cf6a56f8eea05bebac6
516	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1Njk1MywiaWF0IjoxNjcwNTcwNTUzLCJqdGkiOiIyM2EyODFmYzYwYTc0ZDc3YjVkYmIyNmFlMGMyYWM0NyIsInVzZXJfaWQiOjE3fQ.i_NpYJVhAnIWBIgtYklzlkBiyFIB50ExGJdGTDvgZjA	2022-12-09 07:22:33.037066+00	2022-12-10 07:22:33+00	17	23a281fc60a74d77b5dbb26ae0c2ac47
517	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1Njk1MywiaWF0IjoxNjcwNTcwNTUzLCJqdGkiOiJlMDk5OTg3NzRmOGY0Mjc3OGU3N2IzNDlkOGJkYjdkMCIsInVzZXJfaWQiOjE3fQ.wQaMtqLhJX6YeS0eZUGKNZIRJqfDMyViYqMArxxQXAE	2022-12-09 07:22:33.060765+00	2022-12-10 07:22:33+00	17	e09998774f8f42778e77b349d8bdb7d0
518	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NzM4MCwiaWF0IjoxNjcwNTcwOTgwLCJqdGkiOiIwYTIxMmVjYTdiODI0MmIxYWM5ZGMzOTJkODhmODliMyIsInVzZXJfaWQiOjV9.ULYImyFqxa0VYq3VHzIhfDjHUyCE91wW4xC-a5j_pHA	2022-12-09 07:29:40.731075+00	2022-12-10 07:29:40+00	5	0a212eca7b8242b1ac9dc392d88f89b3
519	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NzM4MCwiaWF0IjoxNjcwNTcwOTgwLCJqdGkiOiI0NzViNjU5ZTQ2MWU0NWRmYTBkNGMyZDFhODhjMmYwZCIsInVzZXJfaWQiOjV9.jK9C08Dk35V386iqxxsS-YbHcckEashHYrQAaQAmJCk	2022-12-09 07:29:40.745999+00	2022-12-10 07:29:40+00	5	475b659e461e45dfa0d4c2d1a88c2f0d
520	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NzUxNCwiaWF0IjoxNjcwNTcxMTE0LCJqdGkiOiJlZTU2ZjRkOGRhYjk0MmQwOTk2YzM4OWFlZWJiODAyNCIsInVzZXJfaWQiOjZ9.wAbdV7jPpt_89kHUK9TWX-kL9RHBmpbc_PbrRguTPQA	2022-12-09 07:31:54.251832+00	2022-12-10 07:31:54+00	6	ee56f4d8dab942d0996c389aeebb8024
521	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NzUxNCwiaWF0IjoxNjcwNTcxMTE0LCJqdGkiOiJiYTU0NWY4YzRkODI0OWIyYjc0MTk0YzJiNjQyZjAxZiIsInVzZXJfaWQiOjZ9.IQbdnnKU2hNLPE7Hrj-uyijbmJmbwGQVHXP-7SILXVc	2022-12-09 07:31:54.262557+00	2022-12-10 07:31:54+00	6	ba545f8c4d8249b2b74194c2b642f01f
522	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NzgxNiwiaWF0IjoxNjcwNTcxNDE2LCJqdGkiOiJkNzY2NDQ2YjE0NTc0MmQxOTc0MDJmMGVjMzE0ODljZCIsInVzZXJfaWQiOjE3fQ.IUM3JaK9fRw4lQLsFR_2rKmnr6KbJ5WK3vACMXlcMoc	2022-12-09 07:36:56.230461+00	2022-12-10 07:36:56+00	17	d766446b145742d197402f0ec31489cd
523	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NzgxNiwiaWF0IjoxNjcwNTcxNDE2LCJqdGkiOiI0Mjg0YmZjOGJmYmQ0NjkwYmQyZjFkMzYzNzZkOGFlYiIsInVzZXJfaWQiOjE3fQ.4L2-uj979N7cGp3X52GFdz8iU1fUaP6A_lrwz3AKynQ	2022-12-09 07:36:56.254357+00	2022-12-10 07:36:56+00	17	4284bfc8bfbd4690bd2f1d36376d8aeb
524	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NzgyOCwiaWF0IjoxNjcwNTcxNDI4LCJqdGkiOiIyMDNiYjNmMDE1ZTk0OGI1YTg4MTEyZWVhMzczNmFkNyIsInVzZXJfaWQiOjh9.K5tNL_wt0jrr3qPIK5RhK-stfI1J6fiYzCj506zrGn8	2022-12-09 07:37:08.507407+00	2022-12-10 07:37:08+00	8	203bb3f015e948b5a88112eea3736ad7
525	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NzgyOCwiaWF0IjoxNjcwNTcxNDI4LCJqdGkiOiJlYTM2MGQwYjI2NzQ0YWRjYjQzNTJjYTlkYTAzMDJmNCIsInVzZXJfaWQiOjh9.iTR0cJI33JyZ67TZ5SdNTSVay2ZKyq8buNSouI0AYyc	2022-12-09 07:37:08.523964+00	2022-12-10 07:37:08+00	8	ea360d0b26744adcb4352ca9da0302f4
526	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1Nzg1OSwiaWF0IjoxNjcwNTcxNDU5LCJqdGkiOiI0YWUyYTRjMmM0MTg0NWU4YTMyZTBjNDA2ZDU0NGU0OCIsInVzZXJfaWQiOjE4fQ.6B9Zc4Smi6xMosJYkT_Zkw0WZT528MazoJk4nHsyBEY	2022-12-09 07:37:39.228791+00	2022-12-10 07:37:39+00	18	4ae2a4c2c41845e8a32e0c406d544e48
527	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1Nzg1OSwiaWF0IjoxNjcwNTcxNDU5LCJqdGkiOiI4MzkzYmM4M2ZjNzk0MDM2ODFlNjlhODI0Y2RmMWZhYyIsInVzZXJfaWQiOjE4fQ.E9HDdpGkJVh9OW1Je3Wsn0eeDERRKJbZ9fE_tlfLTQY	2022-12-09 07:37:39.237039+00	2022-12-10 07:37:39+00	18	8393bc83fc79403681e69a824cdf1fac
528	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1Nzg2MywiaWF0IjoxNjcwNTcxNDYzLCJqdGkiOiJhZjEzYzhhN2UwZTI0MzdmYTliOWM0YTA2MzQ1OTA5NCIsInVzZXJfaWQiOjV9.q_L3O3e5ZcJxvP3r22c4ItZEsvqXzrbzefAcXQj9RE4	2022-12-09 07:37:43.719593+00	2022-12-10 07:37:43+00	5	af13c8a7e0e2437fa9b9c4a063459094
529	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1Nzg2MywiaWF0IjoxNjcwNTcxNDYzLCJqdGkiOiJkZDIyNTY1OTJhOWE0ODcyYmZkN2Q0ODliMDFkNDUzYyIsInVzZXJfaWQiOjV9.d1_tzgsJNR27Eg5-RsjuVH6bOy_QSKGiLNRf-vjqQFQ	2022-12-09 07:37:43.726843+00	2022-12-10 07:37:43+00	5	dd2256592a9a4872bfd7d489b01d453c
530	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NzkxMSwiaWF0IjoxNjcwNTcxNTExLCJqdGkiOiI2YzNhMjk2N2U2Yzg0MWJkOGE5MjgxY2JmMzViOGVkMyIsInVzZXJfaWQiOjZ9.aLHGrons63ShmxxcpkKXFBljXD3esz_5u7Gd2J6Xjwk	2022-12-09 07:38:31.576138+00	2022-12-10 07:38:31+00	6	6c3a2967e6c841bd8a9281cbf35b8ed3
531	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1NzkxMSwiaWF0IjoxNjcwNTcxNTExLCJqdGkiOiIxODkyMDcxYTdiNmE0ZGU5ODRmYzhhMTM3ZTdmMjdkZiIsInVzZXJfaWQiOjZ9.B3CiRD_Mju-vOktvcCmSwEfDWqTOGjLYpzLTYc6rwkw	2022-12-09 07:38:31.594594+00	2022-12-10 07:38:31+00	6	1892071a7b6a4de984fc8a137e7f27df
532	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1ODI1NSwiaWF0IjoxNjcwNTcxODU1LCJqdGkiOiI1MDQzODc0ZmNmMTU0MjcwYjM5ZGIxZmMxOWNkMGQ5NSIsInVzZXJfaWQiOjE4fQ.kXF2hAxV8zpQg5XwMM8WLzqSVLFsdeaHIX86vJHUzWM	2022-12-09 07:44:15.696531+00	2022-12-10 07:44:15+00	18	5043874fcf154270b39db1fc19cd0d95
533	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1ODI1NSwiaWF0IjoxNjcwNTcxODU1LCJqdGkiOiJmMzJmYTRmMDc5MWI0MTZmYWNmOWJkNzMyM2ZkODZjMyIsInVzZXJfaWQiOjE4fQ.NuoFTeXqFgpCpJwkISTDRUEyTvk2aJD0jTsIh3_DxV4	2022-12-09 07:44:15.717363+00	2022-12-10 07:44:15+00	18	f32fa4f0791b416facf9bd7323fd86c3
534	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1ODM4MCwiaWF0IjoxNjcwNTcxOTgwLCJqdGkiOiI3OTEwYzRmMDNlOWU0OGUzODdiMzIzZTE2ZjUyY2YyYiIsInVzZXJfaWQiOjN9.NGrAwUTcK6q8uBEVExJR3gmP5le5hp5LmBbZbUN__Zg	2022-12-09 07:46:20.404887+00	2022-12-10 07:46:20+00	3	7910c4f03e9e48e387b323e16f52cf2b
535	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDY1ODM4MCwiaWF0IjoxNjcwNTcxOTgwLCJqdGkiOiIwZGExMjM1NThlNDE0YWZjOTBhNzljYjY3YmZjYWQ5ZCIsInVzZXJfaWQiOjN9.xqIu0SsjAcOfxtjA-JK2zM9dvPFlWPan7QLV4VFWbkQ	2022-12-09 07:46:20.420582+00	2022-12-10 07:46:20+00	3	0da123558e414afc90a79cb67bfcad9d
\.


--
-- Data for Name: voucher_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.voucher_type (id, condition, type) FROM stdin;
\.


--
-- Data for Name: voucher_voucher; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.voucher_voucher (id, code, qty, title, content, from_price, from_product, reduce_price, reduce_persent, end_date, type_id, scope, subcontent, is_delete) FROM stdin;
\.


--
-- Data for Name: voucher_vouchercustomer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.voucher_vouchercustomer (id, is_used, customer_id, voucher_id) FROM stdin;
\.


--
-- Name: accounts_account_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.accounts_account_id_seq', 19, true);


--
-- Name: accounts_agency_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.accounts_agency_id_seq', 10, true);


--
-- Name: accounts_customer_follow_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.accounts_customer_follow_id_seq', 1, false);


--
-- Name: accounts_customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.accounts_customer_id_seq', 3, true);


--
-- Name: accounts_shipper_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.accounts_shipper_id_seq', 1, true);


--
-- Name: accounts_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.accounts_users_id_seq', 14, true);


--
-- Name: accounts_visit_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.accounts_visit_id_seq', 1, false);


--
-- Name: address_address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.address_address_id_seq', 5, true);


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 136, true);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 94, true);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 34, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 99, true);


--
-- Name: orders_cancel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_cancel_id_seq', 1, false);


--
-- Name: orders_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_order_id_seq', 47, true);


--
-- Name: orders_orderdetail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_orderdetail_id_seq', 20, true);


--
-- Name: orders_payment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_payment_id_seq', 1, true);


--
-- Name: orders_statusshippingnote_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_statusshippingnote_id_seq', 15, true);


--
-- Name: products_attachment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_attachment_id_seq', 62, true);


--
-- Name: products_brand_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_brand_id_seq', 17, true);


--
-- Name: products_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_category_id_seq', 19, true);


--
-- Name: products_describe_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_describe_id_seq', 15, true);


--
-- Name: products_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_detail_id_seq', 7, true);


--
-- Name: products_price_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_price_id_seq', 35, true);


--
-- Name: products_product_agency_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_product_agency_id_seq', 23, true);


--
-- Name: products_product_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_product_category_id_seq', 33, true);


--
-- Name: products_product_customer_bought_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_product_customer_bought_id_seq', 9, true);


--
-- Name: products_product_customer_favorite_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_product_customer_favorite_id_seq', 1, false);


--
-- Name: products_product_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_product_detail_id_seq', 7, true);


--
-- Name: products_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_product_id_seq', 21, true);


--
-- Name: products_product_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_product_type_id_seq', 37, true);


--
-- Name: products_quantity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_quantity_id_seq', 44, true);


--
-- Name: products_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_type_id_seq', 23, true);


--
-- Name: rating_image_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rating_image_id_seq', 1, false);


--
-- Name: rating_rate_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rating_rate_id_seq', 11, true);


--
-- Name: rating_reply_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rating_reply_id_seq', 1, false);


--
-- Name: token_blacklist_blacklistedtoken_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.token_blacklist_blacklistedtoken_id_seq', 1, false);


--
-- Name: token_blacklist_outstandingtoken_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.token_blacklist_outstandingtoken_id_seq', 535, true);


--
-- Name: voucher_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.voucher_type_id_seq', 1, false);


--
-- Name: voucher_voucher_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.voucher_voucher_id_seq', 1, false);


--
-- Name: voucher_vouchercustomer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.voucher_vouchercustomer_id_seq', 1, false);


--
-- Name: accounts_account accounts_account_phone_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_account
    ADD CONSTRAINT accounts_account_phone_key UNIQUE (phone);


--
-- Name: accounts_account accounts_account_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_account
    ADD CONSTRAINT accounts_account_pkey PRIMARY KEY (id);


--
-- Name: accounts_agency accounts_agency_identify_50952b79_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_agency
    ADD CONSTRAINT accounts_agency_identify_50952b79_uniq UNIQUE (identify);


--
-- Name: accounts_agency accounts_agency_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_agency
    ADD CONSTRAINT accounts_agency_pkey PRIMARY KEY (id);


--
-- Name: accounts_agency accounts_agency_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_agency
    ADD CONSTRAINT accounts_agency_user_id_key UNIQUE (user_id);


--
-- Name: accounts_customer_follow accounts_customer_follow_customer_id_agency_id_13eb53bd_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_customer_follow
    ADD CONSTRAINT accounts_customer_follow_customer_id_agency_id_13eb53bd_uniq UNIQUE (customer_id, agency_id);


--
-- Name: accounts_customer_follow accounts_customer_follow_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_customer_follow
    ADD CONSTRAINT accounts_customer_follow_pkey PRIMARY KEY (id);


--
-- Name: accounts_customer accounts_customer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_customer
    ADD CONSTRAINT accounts_customer_pkey PRIMARY KEY (id);


--
-- Name: accounts_customer accounts_customer_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_customer
    ADD CONSTRAINT accounts_customer_user_id_key UNIQUE (user_id);


--
-- Name: accounts_shipper accounts_shipper_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_shipper
    ADD CONSTRAINT accounts_shipper_pkey PRIMARY KEY (id);


--
-- Name: accounts_shipper accounts_shipper_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_shipper
    ADD CONSTRAINT accounts_shipper_user_id_key UNIQUE (user_id);


--
-- Name: accounts_users accounts_users_account_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_users
    ADD CONSTRAINT accounts_users_account_id_key UNIQUE (account_id);


--
-- Name: accounts_users accounts_users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_users
    ADD CONSTRAINT accounts_users_email_key UNIQUE (email);


--
-- Name: accounts_users accounts_users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_users
    ADD CONSTRAINT accounts_users_pkey PRIMARY KEY (id);


--
-- Name: accounts_visit accounts_visit_customer_id_agency_id_1cd98890_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_visit
    ADD CONSTRAINT accounts_visit_customer_id_agency_id_1cd98890_uniq UNIQUE (customer_id, agency_id);


--
-- Name: accounts_visit accounts_visit_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_visit
    ADD CONSTRAINT accounts_visit_pkey PRIMARY KEY (id);


--
-- Name: address_address address_address_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address_address
    ADD CONSTRAINT address_address_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: orders_cancel orders_cancel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_cancel
    ADD CONSTRAINT orders_cancel_pkey PRIMARY KEY (id);


--
-- Name: orders_order orders_order_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_order
    ADD CONSTRAINT orders_order_pkey PRIMARY KEY (id);


--
-- Name: orders_orderdetail orders_orderdetail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_orderdetail
    ADD CONSTRAINT orders_orderdetail_pkey PRIMARY KEY (id);


--
-- Name: orders_payment orders_payment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_payment
    ADD CONSTRAINT orders_payment_pkey PRIMARY KEY (id);


--
-- Name: orders_statusshippingnote orders_statusshippingnote_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_statusshippingnote
    ADD CONSTRAINT orders_statusshippingnote_pkey PRIMARY KEY (id);


--
-- Name: products_attachment products_attachment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_attachment
    ADD CONSTRAINT products_attachment_pkey PRIMARY KEY (id);


--
-- Name: products_brand products_brand_origin_origin_brand_name_e78d4ba1_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_brand
    ADD CONSTRAINT products_brand_origin_origin_brand_name_e78d4ba1_uniq UNIQUE (origin, origin_brand, name);


--
-- Name: products_brand products_brand_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_brand
    ADD CONSTRAINT products_brand_pkey PRIMARY KEY (id);


--
-- Name: products_category products_category_name_agency_id_aedab542_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_category
    ADD CONSTRAINT products_category_name_agency_id_aedab542_uniq UNIQUE (name, agency_id);


--
-- Name: products_category products_category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_category
    ADD CONSTRAINT products_category_pkey PRIMARY KEY (id);


--
-- Name: products_describe products_describe_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_describe
    ADD CONSTRAINT products_describe_pkey PRIMARY KEY (id);


--
-- Name: products_detail products_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_detail
    ADD CONSTRAINT products_detail_pkey PRIMARY KEY (id);


--
-- Name: products_price products_price_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_price
    ADD CONSTRAINT products_price_pkey PRIMARY KEY (id);


--
-- Name: products_product_agency products_product_agency_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_agency
    ADD CONSTRAINT products_product_agency_pkey PRIMARY KEY (id);


--
-- Name: products_product_agency products_product_agency_product_id_agency_id_081ddb52_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_agency
    ADD CONSTRAINT products_product_agency_product_id_agency_id_081ddb52_uniq UNIQUE (product_id, agency_id);


--
-- Name: products_product_category products_product_category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_category
    ADD CONSTRAINT products_product_category_pkey PRIMARY KEY (id);


--
-- Name: products_product_category products_product_category_product_id_category_id_99b99489_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_category
    ADD CONSTRAINT products_product_category_product_id_category_id_99b99489_uniq UNIQUE (product_id, category_id);


--
-- Name: products_product_customer_favorite products_product_custome_product_id_customer_id_23e11144_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_customer_favorite
    ADD CONSTRAINT products_product_custome_product_id_customer_id_23e11144_uniq UNIQUE (product_id, customer_id);


--
-- Name: products_product_customer_bought products_product_custome_product_id_customer_id_6fe9e19c_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_customer_bought
    ADD CONSTRAINT products_product_custome_product_id_customer_id_6fe9e19c_uniq UNIQUE (product_id, customer_id);


--
-- Name: products_product_customer_bought products_product_customer_bought_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_customer_bought
    ADD CONSTRAINT products_product_customer_bought_pkey PRIMARY KEY (id);


--
-- Name: products_product_customer_favorite products_product_customer_favorite_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_customer_favorite
    ADD CONSTRAINT products_product_customer_favorite_pkey PRIMARY KEY (id);


--
-- Name: products_product products_product_describe_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product
    ADD CONSTRAINT products_product_describe_id_key UNIQUE (describe_id);


--
-- Name: products_product_detail products_product_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_detail
    ADD CONSTRAINT products_product_detail_pkey PRIMARY KEY (id);


--
-- Name: products_product_detail products_product_detail_product_id_detail_id_6904cc8b_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_detail
    ADD CONSTRAINT products_product_detail_product_id_detail_id_6904cc8b_uniq UNIQUE (product_id, detail_id);


--
-- Name: products_product products_product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product
    ADD CONSTRAINT products_product_pkey PRIMARY KEY (id);


--
-- Name: products_product_type products_product_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_type
    ADD CONSTRAINT products_product_type_pkey PRIMARY KEY (id);


--
-- Name: products_product_type products_product_type_product_id_type_id_b89edc0b_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_type
    ADD CONSTRAINT products_product_type_product_id_type_id_b89edc0b_uniq UNIQUE (product_id, type_id);


--
-- Name: products_quantity products_quantity_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_quantity
    ADD CONSTRAINT products_quantity_pkey PRIMARY KEY (id);


--
-- Name: products_type products_type_name_2e3d0460_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_type
    ADD CONSTRAINT products_type_name_2e3d0460_uniq UNIQUE (name);


--
-- Name: products_type products_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_type
    ADD CONSTRAINT products_type_pkey PRIMARY KEY (id);


--
-- Name: rating_image rating_image_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rating_image
    ADD CONSTRAINT rating_image_pkey PRIMARY KEY (id);


--
-- Name: rating_rate rating_rate_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rating_rate
    ADD CONSTRAINT rating_rate_pkey PRIMARY KEY (id);


--
-- Name: rating_reply rating_reply_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rating_reply
    ADD CONSTRAINT rating_reply_pkey PRIMARY KEY (id);


--
-- Name: token_blacklist_blacklistedtoken token_blacklist_blacklistedtoken_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.token_blacklist_blacklistedtoken
    ADD CONSTRAINT token_blacklist_blacklistedtoken_pkey PRIMARY KEY (id);


--
-- Name: token_blacklist_blacklistedtoken token_blacklist_blacklistedtoken_token_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.token_blacklist_blacklistedtoken
    ADD CONSTRAINT token_blacklist_blacklistedtoken_token_id_key UNIQUE (token_id);


--
-- Name: token_blacklist_outstandingtoken token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.token_blacklist_outstandingtoken
    ADD CONSTRAINT token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq UNIQUE (jti);


--
-- Name: token_blacklist_outstandingtoken token_blacklist_outstandingtoken_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.token_blacklist_outstandingtoken
    ADD CONSTRAINT token_blacklist_outstandingtoken_pkey PRIMARY KEY (id);


--
-- Name: voucher_type voucher_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher_type
    ADD CONSTRAINT voucher_type_pkey PRIMARY KEY (id);


--
-- Name: voucher_voucher voucher_voucher_code_43d30a18_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher_voucher
    ADD CONSTRAINT voucher_voucher_code_43d30a18_uniq UNIQUE (code);


--
-- Name: voucher_voucher voucher_voucher_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher_voucher
    ADD CONSTRAINT voucher_voucher_pkey PRIMARY KEY (id);


--
-- Name: voucher_vouchercustomer voucher_vouchercustomer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher_vouchercustomer
    ADD CONSTRAINT voucher_vouchercustomer_pkey PRIMARY KEY (id);


--
-- Name: accounts_account_phone_8ea3ea59_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX accounts_account_phone_8ea3ea59_like ON public.accounts_account USING btree (phone varchar_pattern_ops);


--
-- Name: accounts_agency_identify_50952b79_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX accounts_agency_identify_50952b79_like ON public.accounts_agency USING btree (identify varchar_pattern_ops);


--
-- Name: accounts_customer_follow_agency_id_ef6bdb41; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX accounts_customer_follow_agency_id_ef6bdb41 ON public.accounts_customer_follow USING btree (agency_id);


--
-- Name: accounts_customer_follow_customer_id_82749de4; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX accounts_customer_follow_customer_id_82749de4 ON public.accounts_customer_follow USING btree (customer_id);


--
-- Name: accounts_users_email_2547c084_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX accounts_users_email_2547c084_like ON public.accounts_users USING btree (email varchar_pattern_ops);


--
-- Name: accounts_visit_agency_id_835dc295; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX accounts_visit_agency_id_835dc295 ON public.accounts_visit USING btree (agency_id);


--
-- Name: accounts_visit_customer_id_de69843b; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX accounts_visit_customer_id_de69843b ON public.accounts_visit USING btree (customer_id);


--
-- Name: address_address_user_id_eb297169; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX address_address_user_id_eb297169 ON public.address_address USING btree (user_id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: orders_order_customer_id_0b76f6a4; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX orders_order_customer_id_0b76f6a4 ON public.orders_order USING btree (customer_id);


--
-- Name: orders_order_detail_id_20a990d5; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX orders_order_detail_id_20a990d5 ON public.orders_order USING btree (order_detail_id);


--
-- Name: orders_order_product_id_096244de; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX orders_order_product_id_096244de ON public.orders_order USING btree (product_id);


--
-- Name: orders_orderdetail_address_id_c4f90e94; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX orders_orderdetail_address_id_c4f90e94 ON public.orders_orderdetail USING btree (address_id);


--
-- Name: orders_orderdetail_agency_id_3ca114dd; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX orders_orderdetail_agency_id_3ca114dd ON public.orders_orderdetail USING btree (agency_id);


--
-- Name: orders_orderdetail_customer_id_c32b84f7; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX orders_orderdetail_customer_id_c32b84f7 ON public.orders_orderdetail USING btree (customer_id);


--
-- Name: orders_orderdetail_payment_id_6fb8d07d; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX orders_orderdetail_payment_id_6fb8d07d ON public.orders_orderdetail USING btree (payment_id);


--
-- Name: orders_orderdetail_shipper_id_91f394fe; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX orders_orderdetail_shipper_id_91f394fe ON public.orders_orderdetail USING btree (shipper_id);


--
-- Name: orders_statusshippingnote_order_detail_id_ba305e20; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX orders_statusshippingnote_order_detail_id_ba305e20 ON public.orders_statusshippingnote USING btree (order_detail_id);


--
-- Name: orders_statusshippingnote_shipper_id_ae004e1c; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX orders_statusshippingnote_shipper_id_ae004e1c ON public.orders_statusshippingnote USING btree (shipper_id);


--
-- Name: products_attachment_product_id_fedc6da6; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_attachment_product_id_fedc6da6 ON public.products_attachment USING btree (product_id);


--
-- Name: products_category_agency_id_f9de6fce; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_category_agency_id_f9de6fce ON public.products_category USING btree (agency_id);


--
-- Name: products_price_product_id_8481dedb; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_price_product_id_8481dedb ON public.products_price USING btree (product_id);


--
-- Name: products_product_agency_agency_id_4c22550d; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_product_agency_agency_id_4c22550d ON public.products_product_agency USING btree (agency_id);


--
-- Name: products_product_agency_product_id_0fb7f5c5; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_product_agency_product_id_0fb7f5c5 ON public.products_product_agency USING btree (product_id);


--
-- Name: products_product_brand_id_3e2e8fd1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_product_brand_id_3e2e8fd1 ON public.products_product USING btree (brand_id);


--
-- Name: products_product_category_category_id_6bd7b606; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_product_category_category_id_6bd7b606 ON public.products_product_category USING btree (category_id);


--
-- Name: products_product_category_product_id_08fb2842; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_product_category_product_id_08fb2842 ON public.products_product_category USING btree (product_id);


--
-- Name: products_product_customer_bought_customer_id_5496d014; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_product_customer_bought_customer_id_5496d014 ON public.products_product_customer_bought USING btree (customer_id);


--
-- Name: products_product_customer_bought_product_id_9e51fd45; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_product_customer_bought_product_id_9e51fd45 ON public.products_product_customer_bought USING btree (product_id);


--
-- Name: products_product_customer_favorite_customer_id_d8ca02ac; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_product_customer_favorite_customer_id_d8ca02ac ON public.products_product_customer_favorite USING btree (customer_id);


--
-- Name: products_product_customer_favorite_product_id_9e84198e; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_product_customer_favorite_product_id_9e84198e ON public.products_product_customer_favorite USING btree (product_id);


--
-- Name: products_product_detail_detail_id_46c2393e; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_product_detail_detail_id_46c2393e ON public.products_product_detail USING btree (detail_id);


--
-- Name: products_product_detail_product_id_0338e5c5; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_product_detail_product_id_0338e5c5 ON public.products_product_detail USING btree (product_id);


--
-- Name: products_product_type_product_id_f737b05b; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_product_type_product_id_f737b05b ON public.products_product_type USING btree (product_id);


--
-- Name: products_product_type_type_id_f24aa164; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_product_type_type_id_f24aa164 ON public.products_product_type USING btree (type_id);


--
-- Name: products_quantity_customer_id_b8810b56; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_quantity_customer_id_b8810b56 ON public.products_quantity USING btree (customer_id);


--
-- Name: products_quantity_product_id_8d4c8beb; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_quantity_product_id_8d4c8beb ON public.products_quantity USING btree (product_id);


--
-- Name: products_type_name_2e3d0460_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX products_type_name_2e3d0460_like ON public.products_type USING btree (name varchar_pattern_ops);


--
-- Name: rating_image_rate_id_91258698; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX rating_image_rate_id_91258698 ON public.rating_image USING btree (rate_id);


--
-- Name: rating_rate_customer_id_1b91cde3; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX rating_rate_customer_id_1b91cde3 ON public.rating_rate USING btree (customer_id);


--
-- Name: rating_rate_product_id_754877cc; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX rating_rate_product_id_754877cc ON public.rating_rate USING btree (product_id);


--
-- Name: rating_reply_rate_id_393c817e; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX rating_reply_rate_id_393c817e ON public.rating_reply USING btree (rate_id);


--
-- Name: rating_reply_user_id_8a36796b; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX rating_reply_user_id_8a36796b ON public.rating_reply USING btree (user_id);


--
-- Name: token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_like ON public.token_blacklist_outstandingtoken USING btree (jti varchar_pattern_ops);


--
-- Name: token_blacklist_outstandingtoken_user_id_83bc629a; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX token_blacklist_outstandingtoken_user_id_83bc629a ON public.token_blacklist_outstandingtoken USING btree (user_id);


--
-- Name: voucher_voucher_code_43d30a18_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX voucher_voucher_code_43d30a18_like ON public.voucher_voucher USING btree (code varchar_pattern_ops);


--
-- Name: voucher_voucher_type_id_c2a6ba75; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX voucher_voucher_type_id_c2a6ba75 ON public.voucher_voucher USING btree (type_id);


--
-- Name: voucher_vouchercustomer_customer_id_d7ab8dd1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX voucher_vouchercustomer_customer_id_d7ab8dd1 ON public.voucher_vouchercustomer USING btree (customer_id);


--
-- Name: voucher_vouchercustomer_voucher_id_f4fa98a2; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX voucher_vouchercustomer_voucher_id_f4fa98a2 ON public.voucher_vouchercustomer USING btree (voucher_id);


--
-- Name: accounts_agency accounts_agency_user_id_af758cd8_fk_accounts_users_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_agency
    ADD CONSTRAINT accounts_agency_user_id_af758cd8_fk_accounts_users_id FOREIGN KEY (user_id) REFERENCES public.accounts_users(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_customer_follow accounts_customer_fo_agency_id_ef6bdb41_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_customer_follow
    ADD CONSTRAINT accounts_customer_fo_agency_id_ef6bdb41_fk_accounts_ FOREIGN KEY (agency_id) REFERENCES public.accounts_agency(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_customer_follow accounts_customer_fo_customer_id_82749de4_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_customer_follow
    ADD CONSTRAINT accounts_customer_fo_customer_id_82749de4_fk_accounts_ FOREIGN KEY (customer_id) REFERENCES public.accounts_customer(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_customer accounts_customer_user_id_11606857_fk_accounts_users_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_customer
    ADD CONSTRAINT accounts_customer_user_id_11606857_fk_accounts_users_id FOREIGN KEY (user_id) REFERENCES public.accounts_users(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_shipper accounts_shipper_user_id_92e511af_fk_accounts_users_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_shipper
    ADD CONSTRAINT accounts_shipper_user_id_92e511af_fk_accounts_users_id FOREIGN KEY (user_id) REFERENCES public.accounts_users(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_users accounts_users_account_id_db7be168_fk_accounts_account_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_users
    ADD CONSTRAINT accounts_users_account_id_db7be168_fk_accounts_account_id FOREIGN KEY (account_id) REFERENCES public.accounts_account(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_visit accounts_visit_agency_id_835dc295_fk_accounts_agency_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_visit
    ADD CONSTRAINT accounts_visit_agency_id_835dc295_fk_accounts_agency_id FOREIGN KEY (agency_id) REFERENCES public.accounts_agency(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: accounts_visit accounts_visit_customer_id_de69843b_fk_accounts_customer_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts_visit
    ADD CONSTRAINT accounts_visit_customer_id_de69843b_fk_accounts_customer_id FOREIGN KEY (customer_id) REFERENCES public.accounts_customer(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: address_address address_address_user_id_eb297169_fk_accounts_users_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address_address
    ADD CONSTRAINT address_address_user_id_eb297169_fk_accounts_users_id FOREIGN KEY (user_id) REFERENCES public.accounts_users(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_accounts_account_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_accounts_account_id FOREIGN KEY (user_id) REFERENCES public.accounts_account(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: orders_order orders_order_customer_id_0b76f6a4_fk_accounts_customer_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_order
    ADD CONSTRAINT orders_order_customer_id_0b76f6a4_fk_accounts_customer_id FOREIGN KEY (customer_id) REFERENCES public.accounts_customer(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: orders_order orders_order_order_detail_id_8fedcb7d_fk_orders_orderdetail_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_order
    ADD CONSTRAINT orders_order_order_detail_id_8fedcb7d_fk_orders_orderdetail_id FOREIGN KEY (order_detail_id) REFERENCES public.orders_orderdetail(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: orders_order orders_order_product_id_096244de_fk_products_product_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_order
    ADD CONSTRAINT orders_order_product_id_096244de_fk_products_product_id FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: orders_orderdetail orders_orderdetail_address_id_c4f90e94_fk_address_address_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_orderdetail
    ADD CONSTRAINT orders_orderdetail_address_id_c4f90e94_fk_address_address_id FOREIGN KEY (address_id) REFERENCES public.address_address(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: orders_orderdetail orders_orderdetail_agency_id_3ca114dd_fk_accounts_agency_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_orderdetail
    ADD CONSTRAINT orders_orderdetail_agency_id_3ca114dd_fk_accounts_agency_id FOREIGN KEY (agency_id) REFERENCES public.accounts_agency(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: orders_orderdetail orders_orderdetail_customer_id_c32b84f7_fk_accounts_customer_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_orderdetail
    ADD CONSTRAINT orders_orderdetail_customer_id_c32b84f7_fk_accounts_customer_id FOREIGN KEY (customer_id) REFERENCES public.accounts_customer(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: orders_orderdetail orders_orderdetail_payment_id_6fb8d07d_fk_orders_payment_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_orderdetail
    ADD CONSTRAINT orders_orderdetail_payment_id_6fb8d07d_fk_orders_payment_id FOREIGN KEY (payment_id) REFERENCES public.orders_payment(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: orders_orderdetail orders_orderdetail_shipper_id_91f394fe_fk_accounts_shipper_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_orderdetail
    ADD CONSTRAINT orders_orderdetail_shipper_id_91f394fe_fk_accounts_shipper_id FOREIGN KEY (shipper_id) REFERENCES public.accounts_shipper(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: orders_statusshippingnote orders_statusshippin_order_detail_id_ba305e20_fk_orders_or; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_statusshippingnote
    ADD CONSTRAINT orders_statusshippin_order_detail_id_ba305e20_fk_orders_or FOREIGN KEY (order_detail_id) REFERENCES public.orders_orderdetail(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: orders_statusshippingnote orders_statusshippin_shipper_id_ae004e1c_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_statusshippingnote
    ADD CONSTRAINT orders_statusshippin_shipper_id_ae004e1c_fk_accounts_ FOREIGN KEY (shipper_id) REFERENCES public.accounts_shipper(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_attachment products_attachment_product_id_fedc6da6_fk_products_product_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_attachment
    ADD CONSTRAINT products_attachment_product_id_fedc6da6_fk_products_product_id FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_category products_category_agency_id_f9de6fce_fk_accounts_agency_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_category
    ADD CONSTRAINT products_category_agency_id_f9de6fce_fk_accounts_agency_id FOREIGN KEY (agency_id) REFERENCES public.accounts_agency(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_price products_price_product_id_8481dedb_fk_products_product_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_price
    ADD CONSTRAINT products_price_product_id_8481dedb_fk_products_product_id FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product_agency products_product_age_agency_id_4c22550d_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_agency
    ADD CONSTRAINT products_product_age_agency_id_4c22550d_fk_accounts_ FOREIGN KEY (agency_id) REFERENCES public.accounts_agency(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product_agency products_product_age_product_id_0fb7f5c5_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_agency
    ADD CONSTRAINT products_product_age_product_id_0fb7f5c5_fk_products_ FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product products_product_brand_id_3e2e8fd1_fk_products_brand_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product
    ADD CONSTRAINT products_product_brand_id_3e2e8fd1_fk_products_brand_id FOREIGN KEY (brand_id) REFERENCES public.products_brand(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product_category products_product_cat_category_id_6bd7b606_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_category
    ADD CONSTRAINT products_product_cat_category_id_6bd7b606_fk_products_ FOREIGN KEY (category_id) REFERENCES public.products_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product_category products_product_cat_product_id_08fb2842_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_category
    ADD CONSTRAINT products_product_cat_product_id_08fb2842_fk_products_ FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product_customer_bought products_product_cus_customer_id_5496d014_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_customer_bought
    ADD CONSTRAINT products_product_cus_customer_id_5496d014_fk_accounts_ FOREIGN KEY (customer_id) REFERENCES public.accounts_customer(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product_customer_favorite products_product_cus_customer_id_d8ca02ac_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_customer_favorite
    ADD CONSTRAINT products_product_cus_customer_id_d8ca02ac_fk_accounts_ FOREIGN KEY (customer_id) REFERENCES public.accounts_customer(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product_customer_bought products_product_cus_product_id_9e51fd45_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_customer_bought
    ADD CONSTRAINT products_product_cus_product_id_9e51fd45_fk_products_ FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product_customer_favorite products_product_cus_product_id_9e84198e_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_customer_favorite
    ADD CONSTRAINT products_product_cus_product_id_9e84198e_fk_products_ FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product products_product_describe_id_6a847e7f_fk_products_describe_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product
    ADD CONSTRAINT products_product_describe_id_6a847e7f_fk_products_describe_id FOREIGN KEY (describe_id) REFERENCES public.products_describe(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product_detail products_product_det_detail_id_46c2393e_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_detail
    ADD CONSTRAINT products_product_det_detail_id_46c2393e_fk_products_ FOREIGN KEY (detail_id) REFERENCES public.products_detail(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product_detail products_product_det_product_id_0338e5c5_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_detail
    ADD CONSTRAINT products_product_det_product_id_0338e5c5_fk_products_ FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product_type products_product_typ_product_id_f737b05b_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_type
    ADD CONSTRAINT products_product_typ_product_id_f737b05b_fk_products_ FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product_type products_product_type_type_id_f24aa164_fk_products_type_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_product_type
    ADD CONSTRAINT products_product_type_type_id_f24aa164_fk_products_type_id FOREIGN KEY (type_id) REFERENCES public.products_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_quantity products_quantity_customer_id_b8810b56_fk_accounts_customer_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_quantity
    ADD CONSTRAINT products_quantity_customer_id_b8810b56_fk_accounts_customer_id FOREIGN KEY (customer_id) REFERENCES public.accounts_customer(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_quantity products_quantity_product_id_8d4c8beb_fk_products_product_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products_quantity
    ADD CONSTRAINT products_quantity_product_id_8d4c8beb_fk_products_product_id FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rating_image rating_image_rate_id_91258698_fk_rating_rate_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rating_image
    ADD CONSTRAINT rating_image_rate_id_91258698_fk_rating_rate_id FOREIGN KEY (rate_id) REFERENCES public.rating_rate(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rating_rate rating_rate_customer_id_1b91cde3_fk_accounts_customer_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rating_rate
    ADD CONSTRAINT rating_rate_customer_id_1b91cde3_fk_accounts_customer_id FOREIGN KEY (customer_id) REFERENCES public.accounts_customer(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rating_rate rating_rate_product_id_754877cc_fk_products_product_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rating_rate
    ADD CONSTRAINT rating_rate_product_id_754877cc_fk_products_product_id FOREIGN KEY (product_id) REFERENCES public.products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rating_reply rating_reply_rate_id_393c817e_fk_rating_rate_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rating_reply
    ADD CONSTRAINT rating_reply_rate_id_393c817e_fk_rating_rate_id FOREIGN KEY (rate_id) REFERENCES public.rating_rate(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: rating_reply rating_reply_user_id_8a36796b_fk_accounts_users_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rating_reply
    ADD CONSTRAINT rating_reply_user_id_8a36796b_fk_accounts_users_id FOREIGN KEY (user_id) REFERENCES public.accounts_users(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: token_blacklist_blacklistedtoken token_blacklist_blacklistedtoken_token_id_3cc7fe56_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.token_blacklist_blacklistedtoken
    ADD CONSTRAINT token_blacklist_blacklistedtoken_token_id_3cc7fe56_fk FOREIGN KEY (token_id) REFERENCES public.token_blacklist_outstandingtoken(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: token_blacklist_outstandingtoken token_blacklist_outs_user_id_83bc629a_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.token_blacklist_outstandingtoken
    ADD CONSTRAINT token_blacklist_outs_user_id_83bc629a_fk_accounts_ FOREIGN KEY (user_id) REFERENCES public.accounts_account(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: voucher_voucher voucher_voucher_type_id_c2a6ba75_fk_voucher_type_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher_voucher
    ADD CONSTRAINT voucher_voucher_type_id_c2a6ba75_fk_voucher_type_id FOREIGN KEY (type_id) REFERENCES public.voucher_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: voucher_vouchercustomer voucher_vouchercusto_customer_id_d7ab8dd1_fk_accounts_; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher_vouchercustomer
    ADD CONSTRAINT voucher_vouchercusto_customer_id_d7ab8dd1_fk_accounts_ FOREIGN KEY (customer_id) REFERENCES public.accounts_customer(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: voucher_vouchercustomer voucher_vouchercusto_voucher_id_f4fa98a2_fk_voucher_v; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.voucher_vouchercustomer
    ADD CONSTRAINT voucher_vouchercusto_voucher_id_f4fa98a2_fk_voucher_v FOREIGN KEY (voucher_id) REFERENCES public.voucher_voucher(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Debian 15.1-1.pgdg110+1)
-- Dumped by pg_dump version 15.1 (Debian 15.1-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

