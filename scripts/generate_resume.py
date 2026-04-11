#!/usr/bin/env python3
"""Generate public/resume.pdf (max 2 pages). Requires: pip install fpdf2"""

from pathlib import Path

from fpdf import FPDF

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "resume.pdf"


class ResumePDF(FPDF):
    def footer(self) -> None:
        self.set_y(-12)
        self.set_font("Helvetica", size=8)
        self.set_text_color(100, 100, 100)
        self.cell(0, 8, f"Page {self.page_no()}", align="C")


def section_title(pdf: FPDF, title: str) -> None:
    pdf.set_font("Helvetica", "B", 11)
    pdf.set_text_color(0, 80, 120)
    pdf.cell(0, 6, title, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1)


def job_header(pdf: FPDF, company: str, role: str, period: str, loc: str) -> None:
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(15, 23, 42)
    pdf.cell(0, 5, company, new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "I", 9)
    pdf.set_text_color(80, 80, 80)
    pdf.cell(
        0,
        4,
        f"{role}  |  {period}  |  {loc}",
        new_x="LMARGIN",
        new_y="NEXT",
    )
    pdf.ln(1)


def bullet(pdf: FPDF, text: str) -> None:
    pdf.set_x(pdf.l_margin)
    pdf.set_font("Helvetica", size=9)
    pdf.set_text_color(40, 40, 40)
    pdf.multi_cell(pdf.epw, 4.5, f"  - {text}")


def main() -> None:
    pdf = ResumePDF()
    pdf.set_margins(18, 18, 18)
    pdf.set_auto_page_break(auto=True, margin=18)
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 18)
    pdf.set_text_color(15, 23, 42)
    pdf.cell(0, 8, "AJIT ZAGADE", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", size=10)
    pdf.set_text_color(60, 60, 60)
    pdf.cell(
        0,
        5,
        "Senior Full Stack Engineer | Engineering Leader",
        new_x="LMARGIN",
        new_y="NEXT",
    )
    pdf.cell(
        0,
        5,
        "Pune, Maharashtra, India  |  +91 8007755527  |  ajitzagade.3@gmail.com",
        new_x="LMARGIN",
        new_y="NEXT",
    )
    pdf.set_font("Helvetica", size=9)
    pdf.cell(
        0,
        5,
        "linkedin.com/in/ajit-zagade-63905777  |  github.com/ajitzagade",
        new_x="LMARGIN",
        new_y="NEXT",
    )
    pdf.ln(4)

    section_title(pdf, "PROFESSIONAL SUMMARY")
    pdf.set_font("Helvetica", size=9)
    pdf.set_text_color(40, 40, 40)
    pdf.set_x(pdf.l_margin)
    pdf.multi_cell(
        pdf.epw,
        4.5,
        "12+ years building scalable systems and leading engineering teams. "
        "Deep expertise in React, Node.js, mobile (React Native, Android/Kotlin), "
        "WebRTC, payments, and healthcare IoT - from system design through production.",
    )
    pdf.ln(2)

    section_title(pdf, "CORE COMPETENCIES")
    pdf.set_font("Helvetica", size=9)
    pdf.set_x(pdf.l_margin)
    pdf.multi_cell(
        pdf.epw,
        4.5,
        "Frontend: React, Angular, TypeScript  |  Mobile: React Native, Android (Kotlin/Java)  |  "
        "Backend: Node.js, Express, WebSockets, microservices  |  "
        "Cloud & DevOps: AWS, Docker, Jenkins, Azure DevOps  |  Data: MongoDB, PostgreSQL, MySQL",
    )
    pdf.ln(2)

    section_title(pdf, "PROFESSIONAL EXPERIENCE")

    job_header(
        pdf,
        "Reliance Jio Infocomm Ltd.",
        "Lead Engineer / Engineering Team Lead",
        "Feb 2019 - Present",
        "Pune, Maharashtra, India",
    )
    for b in [
        "Led a team of 14 engineers across frontend, mobile, and platform delivery.",
        "Owned architecture, reliability, and roadmap execution for JioMeet and related platforms.",
        "Drove technical standards, reviews, and cross-functional alignment with product and infra.",
    ]:
        bullet(pdf, b)
    pdf.ln(2)

    job_header(
        pdf,
        "HealthATM India Pvt. Ltd.",
        "Senior Full Stack Developer",
        "Mar 2017 - Feb 2019",
        "Pune, Maharashtra, India",
    )
    for b in [
        "Built fintech and healthcare consumer apps at scale using React Native and Android (Kotlin).",
        "Integrated BLE medical devices, secure APIs, and real-time health telemetry pipelines.",
    ]:
        bullet(pdf, b)
    pdf.ln(2)

    job_header(
        pdf,
        "Crystal Hitech IT Solutions Pvt. Ltd.",
        "Sr. Android Developer",
        "Sep 2015 - Feb 2017",
        "Pune, Maharashtra, India",
    )
    for b in [
        "Shipped Android features with focus on performance, stability, and code quality.",
        "Partnered with product and backend teams on end-to-end delivery.",
    ]:
        bullet(pdf, b)
    pdf.ln(2)

    job_header(
        pdf,
        "Mindscrub Technologies",
        "Software Developer",
        "Jul 2014 - Aug 2015",
        "Pune, Maharashtra, India",
    )
    for b in [
        "Delivered product features with strong attention to quality and iterative releases.",
    ]:
        bullet(pdf, b)
    pdf.ln(2)

    section_title(pdf, "SELECTED IMPACT")
    pdf.set_font("Helvetica", size=9)
    for line in [
        "Enterprise video (JioMeet): WebRTC, large sessions, production-scale conferencing.",
        "Fintech wallet: payments integrations (Razorpay, PayPal, Braintree), resilient transaction flows.",
        "Healthcare IoT: BLE devices, live monitoring, MongoDB-backed services.",
    ]:
        bullet(pdf, line)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT))
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
