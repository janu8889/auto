/* eslint-disable @next/next/no-img-element */
import "./terms.css";
import Breadcrumb from "../components/terms/Breadcrumb";
import LegalContent from "../components/terms/LegalContent";
import legalSections from "./legalData";


export default function TermsPage() {
  return (
    <>
      <main role="main">
        <Breadcrumb />
        <LegalContent legalSections={legalSections} />
      </main>
    </>
  );
}
