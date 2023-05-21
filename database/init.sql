-- Datoteka iz prethodne domaće zadaće

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

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

--DROP DATABASE dom;
--
-- Name: dom; Type: DATABASE; Schema: -; Owner: postgres
--

--CREATE DATABASE dom WITH ENCODING = 'UTF8';


ALTER DATABASE dom OWNER TO postgres;

\connect dom

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
-- Name: accomodations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.accomodations (
    "accomodationId" integer NOT NULL,
    name character varying(128) NOT NULL,
    address character varying(512) NOT NULL
);


ALTER TABLE public.accomodations OWNER TO postgres;

--
-- Name: accomodations_accomodationId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.accomodations ALTER COLUMN "accomodationId" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."accomodations_accomodationId_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: administrators; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.administrators (
    "administratorId" integer NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.administrators OWNER TO postgres;

--
-- Name: administrators_administratorId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.administrators ALTER COLUMN "administratorId" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."administrators_administratorId_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: employees; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employees (
    "employeeId" integer NOT NULL,
    "workPhone" character varying(32),
    "userId" integer NOT NULL
);


ALTER TABLE public.employees OWNER TO postgres;

--
-- Name: employees_employeeId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.employees ALTER COLUMN "employeeId" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."employees_employeeId_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: feedback; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.feedback (
    "feedbackId" integer NOT NULL,
    "userId" integer NOT NULL,
    "roomId" integer,
    "feedbackTopic" character varying(128) NOT NULL,
    "feedbackDesc" character varying(2048) NOT NULL
);


ALTER TABLE public.feedback OWNER TO postgres;

--
-- Name: feedback_feedbackId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.feedback ALTER COLUMN "feedbackId" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."feedback_feedbackId_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: jobAsignees; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."jobAsignees" (
    "jobId" integer NOT NULL,
    "employeeId" integer NOT NULL
);


ALTER TABLE public."jobAsignees" OWNER TO postgres;

--
-- Name: jobs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jobs (
    "jobId" integer NOT NULL,
    "jobName" character varying(128) NOT NULL,
    "jobDescription" character varying(2048) NOT NULL,
    "dateCreated" timestamp with time zone NOT NULL,
    "dateDue" timestamp with time zone NOT NULL,
    "roomId" integer NOT NULL
);


ALTER TABLE public.jobs OWNER TO postgres;

--
-- Name: jobs_jobId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.jobs ALTER COLUMN "jobId" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."jobs_jobId_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: rooms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rooms (
    "roomId" integer NOT NULL,
    "accomodationId" integer NOT NULL,
    "roomNumber" integer NOT NULL,
    "roomFloor" integer NOT NULL,
    "roomLabel" character varying(64) NOT NULL
);


ALTER TABLE public.rooms OWNER TO postgres;

--
-- Name: rooms_roomId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.rooms ALTER COLUMN "roomId" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."rooms_roomId_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    "studentId" integer NOT NULL,
    faculty character varying NOT NULL,
    "roomId" integer NOT NULL,
    "userId" integer NOT NULL,
    jmbag character varying(12) NOT NULL
);


ALTER TABLE public.students OWNER TO postgres;

--
-- Name: students_studentId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.students ALTER COLUMN "studentId" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."students_studentId_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: userTypes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."userTypes" (
    "userTypeId" integer NOT NULL,
    "userTypeLabel" character varying(128) NOT NULL
);


ALTER TABLE public."userTypes" OWNER TO postgres;

--
-- Name: userTypes_userTypeId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."userTypes" ALTER COLUMN "userTypeId" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."userTypes_userTypeId_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    "userId" integer NOT NULL,
    email character varying(128) NOT NULL,
    password character varying(512) NOT NULL,
    "userTypeId" integer NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_userId_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN "userId" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."users_userId_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: accomodations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.accomodations ("accomodationId", name, address) OVERRIDING SYSTEM VALUE VALUES (1, 'SD Stjepan radić', 'Jarunska 2, 10000 Zagreb');
INSERT INTO public.accomodations ("accomodationId", name, address) OVERRIDING SYSTEM VALUE VALUES (2, 'SD Dr. Ante Starčević', 'Zagrebačka avenija 2, 10000 Zagreb');
INSERT INTO public.accomodations ("accomodationId", name, address) OVERRIDING SYSTEM VALUE VALUES (3, 'SD Cvjetno naselje', 'Odranska 8, 10000 Zagreb');


--
-- Data for Name: administrators; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.administrators ("administratorId", "userId") OVERRIDING SYSTEM VALUE VALUES (1, 6);
INSERT INTO public.administrators ("administratorId", "userId") OVERRIDING SYSTEM VALUE VALUES (2, 9);
INSERT INTO public.administrators ("administratorId", "userId") OVERRIDING SYSTEM VALUE VALUES (3, 3);


--
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.employees ("employeeId", "workPhone", "userId") OVERRIDING SYSTEM VALUE VALUES (1, '+1-555-1234', 5);
INSERT INTO public.employees ("employeeId", "workPhone", "userId") OVERRIDING SYSTEM VALUE VALUES (2, '+1-555-5678', 2);
INSERT INTO public.employees ("employeeId", "workPhone", "userId") OVERRIDING SYSTEM VALUE VALUES (3, NULL, 8);


--
-- Data for Name: feedback; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.feedback ("feedbackId", "userId", "roomId", "feedbackTopic", "feedbackDesc") OVERRIDING SYSTEM VALUE VALUES (1, 1, 15, 'Osvjetljenje', 'Potrebna zamjena svjetiljke u sobi 5-89.');
INSERT INTO public.feedback ("feedbackId", "userId", "roomId", "feedbackTopic", "feedbackDesc") OVERRIDING SYSTEM VALUE VALUES (2, 3, NULL, 'Higijena', 'Problemi s čistoćom zajedničkih prostora.');
INSERT INTO public.feedback ("feedbackId", "userId", "roomId", "feedbackTopic", "feedbackDesc") OVERRIDING SYSTEM VALUE VALUES (3, 6, 19, 'Udobnost', 'Kreveti su neudobni i trebaju zamjenu madraca.');
INSERT INTO public.feedback ("feedbackId", "userId", "roomId", "feedbackTopic", "feedbackDesc") OVERRIDING SYSTEM VALUE VALUES (4, 9, NULL, 'Oprema', 'Nedostatak stolica u zajedničkoj prostoriji.');


--
-- Data for Name: jobAsignees; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."jobAsignees" ("jobId", "employeeId") VALUES (1, 1);
INSERT INTO public."jobAsignees" ("jobId", "employeeId") VALUES (2, 2);
INSERT INTO public."jobAsignees" ("jobId", "employeeId") VALUES (3, 3);
INSERT INTO public."jobAsignees" ("jobId", "employeeId") VALUES (4, 1);
INSERT INTO public."jobAsignees" ("jobId", "employeeId") VALUES (5, 2);


--
-- Data for Name: jobs; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.jobs ("jobId", "jobName", "jobDescription", "dateCreated", "dateDue", "roomId") OVERRIDING SYSTEM VALUE VALUES (1, 'Zamjena žarulje u sobi 3-46', 'Zamjena pregorele žarulje u sobi 3-46', '2023-04-09 12:30:00+02', '2023-04-10 14:00:00+02', 1);
INSERT INTO public.jobs ("jobId", "jobName", "jobDescription", "dateCreated", "dateDue", "roomId") OVERRIDING SYSTEM VALUE VALUES (2, 'Popravak stola u sobi 1-81', 'Popravak slomljenog stola u sobi 1-81', '2023-04-09 16:45:00+02', '2023-04-11 18:30:00+02', 2);
INSERT INTO public.jobs ("jobId", "jobName", "jobDescription", "dateCreated", "dateDue", "roomId") OVERRIDING SYSTEM VALUE VALUES (3, 'Popravak vrata u sobi 5-64', 'Popravak vrata koja se ne zatvaraju pravilno u sobi 5-64', '2023-04-10 10:15:00+02', '2023-04-12 12:00:00+02', 5);
INSERT INTO public.jobs ("jobId", "jobName", "jobDescription", "dateCreated", "dateDue", "roomId") OVERRIDING SYSTEM VALUE VALUES (4, 'Zamjena utičnice u sobi 5-39', 'Zamjena neispravne električne utičnice u sobi 5-39', '2023-04-11 18:00:00+02', '2023-04-13 11:30:00+02', 10);
INSERT INTO public.jobs ("jobId", "jobName", "jobDescription", "dateCreated", "dateDue", "roomId") OVERRIDING SYSTEM VALUE VALUES (5, 'Popravak stolice u sobi 5-89', 'Popravak nestabilne stolice u sobi 5-89', '2023-04-12 13:30:00+02', '2023-04-14 16:00:00+02', 15);


--
-- Data for Name: rooms; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (1, 2, 46, 3, '3-46');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (2, 1, 81, 1, '1-81');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (3, 3, 19, 2, '2-19');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (4, 1, 64, 5, '5-64');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (5, 3, 27, 3, '3-27');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (6, 2, 54, 4, '4-54');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (7, 1, 12, 1, '1-12');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (8, 3, 78, 2, '2-78');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (9, 1, 93, 3, '3-93');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (10, 2, 39, 5, '5-39');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (11, 3, 68, 1, '1-68');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (12, 1, 7, 4, '4-7');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (13, 2, 22, 2, '2-22');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (14, 3, 56, 3, '3-56');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (15, 1, 89, 5, '5-89');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (16, 2, 35, 1, '1-35');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (17, 1, 71, 2, '2-71');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (18, 3, 44, 4, '4-44');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (19, 2, 17, 3, '3-17');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (20, 1, 82, 5, '5-82');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (21, 3, 29, 1, '1-29');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (22, 2, 51, 2, '2-51');
INSERT INTO public.rooms ("roomId", "accomodationId", "roomNumber", "roomFloor", "roomLabel") OVERRIDING SYSTEM VALUE VALUES (23, 1, 74, 3, '3-74');


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.students ("studentId", faculty, "roomId", "userId", jmbag) OVERRIDING SYSTEM VALUE VALUES (1, 'Sveučilište u Zagrebu, Fakultet elektrotehnike i računarstva', 12, 7, '0098357004');
INSERT INTO public.students ("studentId", faculty, "roomId", "userId", jmbag) OVERRIDING SYSTEM VALUE VALUES (2, 'Sveučilište u Splitu, Fakultet građevinarstva, arhitekture i geodezije', 5, 1, '0047392018');
INSERT INTO public.students ("studentId", faculty, "roomId", "userId", jmbag) OVERRIDING SYSTEM VALUE VALUES (3, 'Sveučilište u Rijeci, Pravni fakultet', 22, 10, '0066619537');
INSERT INTO public.students ("studentId", faculty, "roomId", "userId", jmbag) OVERRIDING SYSTEM VALUE VALUES (4, 'Sveučilište u Osijeku, Ekonomski fakultet', 18, 4, '0078452190');


--
-- Data for Name: userTypes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."userTypes" ("userTypeId", "userTypeLabel") OVERRIDING SYSTEM VALUE VALUES (1, 'student');
INSERT INTO public."userTypes" ("userTypeId", "userTypeLabel") OVERRIDING SYSTEM VALUE VALUES (2, 'employee');
INSERT INTO public."userTypes" ("userTypeId", "userTypeLabel") OVERRIDING SYSTEM VALUE VALUES (3, 'administrator');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users ("userId", email, password, "userTypeId") OVERRIDING SYSTEM VALUE VALUES (1, 'johndoe@studentmail.com', 'Hello123!', 1);
INSERT INTO public.users ("userId", email, password, "userTypeId") OVERRIDING SYSTEM VALUE VALUES (2, 'sarahsmith@workmail.com', 'MyPwd456', 2);
INSERT INTO public.users ("userId", email, password, "userTypeId") OVERRIDING SYSTEM VALUE VALUES (3, 'adminjackson@example.com', 'SecurePass789', 3);
INSERT INTO public.users ("userId", email, password, "userTypeId") OVERRIDING SYSTEM VALUE VALUES (4, 'lisawang@studentmail.com', 'StrongPwd321', 1);
INSERT INTO public.users ("userId", email, password, "userTypeId") OVERRIDING SYSTEM VALUE VALUES (5, 'markjohnson@workmail.com', 'Passw0rd456', 2);
INSERT INTO public.users ("userId", email, password, "userTypeId") OVERRIDING SYSTEM VALUE VALUES (6, 'adminbrown@example.com', 'Admin@123', 3);
INSERT INTO public.users ("userId", email, password, "userTypeId") OVERRIDING SYSTEM VALUE VALUES (7, 'emilywilson@studentmail.com', 'Password789', 1);
INSERT INTO public.users ("userId", email, password, "userTypeId") OVERRIDING SYSTEM VALUE VALUES (8, 'michaeljones@workmail.com', 'SecretPwd567', 2);
INSERT INTO public.users ("userId", email, password, "userTypeId") OVERRIDING SYSTEM VALUE VALUES (9, 'adminrobinson@example.com', 'SuperSecure123', 3);
INSERT INTO public.users ("userId", email, password, "userTypeId") OVERRIDING SYSTEM VALUE VALUES (10, 'andrewlee@studentmail.com', 'MyPass@456', 1);


--
-- Name: accomodations_accomodationId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."accomodations_accomodationId_seq"', 3, true);


--
-- Name: administrators_administratorId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."administrators_administratorId_seq"', 3, true);


--
-- Name: employees_employeeId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."employees_employeeId_seq"', 3, true);


--
-- Name: feedback_feedbackId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."feedback_feedbackId_seq"', 4, true);


--
-- Name: jobs_jobId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."jobs_jobId_seq"', 5, true);


--
-- Name: rooms_roomId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."rooms_roomId_seq"', 23, true);


--
-- Name: students_studentId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."students_studentId_seq"', 4, true);


--
-- Name: userTypes_userTypeId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."userTypes_userTypeId_seq"', 3, true);


--
-- Name: users_userId_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."users_userId_seq"', 10, true);


--
-- Name: rooms Room_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT "Room_pkey" PRIMARY KEY ("roomId");


--
-- Name: accomodations accomodations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accomodations
    ADD CONSTRAINT accomodations_pkey PRIMARY KEY ("accomodationId");


--
-- Name: administrators administrators_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.administrators
    ADD CONSTRAINT administrators_pkey PRIMARY KEY ("administratorId");


--
-- Name: employees employees_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY ("employeeId");


--
-- Name: feedback feedback_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.feedback
    ADD CONSTRAINT feedback_pkey PRIMARY KEY ("feedbackId");


--
-- Name: jobAsignees jobAsignees_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."jobAsignees"
    ADD CONSTRAINT "jobAsignees_pkey" PRIMARY KEY ("jobId", "employeeId");


--
-- Name: jobs jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY ("jobId");


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY ("studentId");


--
-- Name: userTypes userTypes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."userTypes"
    ADD CONSTRAINT "userTypes_pkey" PRIMARY KEY ("userTypeId");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY ("userId");


--
-- Name: users FKuserTypeId; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "FKuserTypeId" FOREIGN KEY ("userTypeId") REFERENCES public."userTypes"("userTypeId") NOT VALID;


--
-- Name: employees employees_users_null_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_users_null_fk FOREIGN KEY ("userId") REFERENCES public.users("userId");


--
-- Name: rooms fkAccomodationId; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT "fkAccomodationId" FOREIGN KEY ("accomodationId") REFERENCES public.accomodations("accomodationId");


--
-- Name: jobAsignees fkEmployeeId; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."jobAsignees"
    ADD CONSTRAINT "fkEmployeeId" FOREIGN KEY ("employeeId") REFERENCES public.employees("employeeId");


--
-- Name: jobAsignees fkJobId; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."jobAsignees"
    ADD CONSTRAINT "fkJobId" FOREIGN KEY ("jobId") REFERENCES public.jobs("jobId");


--
-- Name: jobs fkJobRoom; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT "fkJobRoom" FOREIGN KEY ("roomId") REFERENCES public.rooms("roomId");


--
-- Name: students fkRoomId; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT "fkRoomId" FOREIGN KEY ("roomId") REFERENCES public.rooms("roomId");


--
-- Name: feedback fkRoomId; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.feedback
    ADD CONSTRAINT "fkRoomId" FOREIGN KEY ("roomId") REFERENCES public.rooms("roomId");


--
-- Name: students fkUserId; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT "fkUserId" FOREIGN KEY ("userId") REFERENCES public.users("userId");


--
-- Name: feedback fkUserId; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.feedback
    ADD CONSTRAINT "fkUserId" FOREIGN KEY ("userId") REFERENCES public.users("userId");


--
-- Name: administrators fkUserId; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.administrators
    ADD CONSTRAINT "fkUserId" FOREIGN KEY ("userId") REFERENCES public.users("userId");


--
-- PostgreSQL database dump complete
--

