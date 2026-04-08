import { useState } from "react";
import { FaBookOpen, FaFileAlt } from "react-icons/fa";
import "./Research.css";

function Research() {
  const [activeTab, setActiveTab] = useState("conferences");

  const conferences = [
    'KV Prasad, SS Harsha, S Putheti, K Raghu, "A Novel Approach to Detect Leaf Disease and Feature Extraction Using IoT", Springer Conference Publication: Ubiquitous Intelligent Systems, Pages: 695–705 (2022).',
    'Sudhakar Putheti, Bhimavarapu Sravya Pranati, Vishwaksen Bairisetti, "Mobile Net Convolutional Neural Networks for Video Classification", Springer Conference Publication: Advanced Informatics for Computing Research, Pages: 318-328 (2021).',
    'Bh SravyaPranati, D Suma, Ch ManjuLatha, Sudhakar Putheti, "Large-scale video classification with convolutional neural networks", Springer Singapore Conference Publications: Information and Communication Technology for Intelligent Systems, pp 689–695 (2020).',
    'Sudhakar Putheti, MN Sri Harsha, A Vishnuvardhan, "Motion detection in video retrieval using content-based video retrieval", Springer Singapore Conference Publications: Innovations in Computer Science and Engineering, Pages 235-242 (2019).',
    'K. Gowri Raghavendra Narayan, T. Srinivasa Rao, P. Pothu Raju, P. Sudhakar, "A Study on Certificate-Based Trust in MANETs", Springer Conference Publication: Proceedings of ICCIDE 2017, Volume 9, Pages 41-54 (2017).',
    'Sudhakar Putheti, P. R. Krishna Prasad, Srinivasa Reddy Edara, "Content Based Image Retrieval Using Fuzzy Texton and Shearlet Transform", Springer Conference Publications: IEMS 2015, LNEE Volume 349, pp 791-801 (2015). Scopus Indexed.',
    'Sasikala, S.; Putheti, S., "Interpolation of CFA Color Images with Hybrid Image Denoising", IEEE Conference Publications: CICN 2014, Pages: 193–197. Sponsored by IEEE Computer Society.',
    'Putheti, S.; Edara, S.R.; Edara, S.A., "CBIR using Texels of colour Fuzzy Textons", IEEE Conference Publications: HIS 2012, Pages: 461–467. DBLP Indexed.',
    'Putheti, S.; Edara, S.R.; Edara, S.A., "CBIR using texels of RGB colour textons", IEEE Conference Publications: WICT 2011, Pages: 1020-1025.',
  ];

  const journals = [
    'Mandalapu, S.R., Narayanan, B. & Putheti, S. "A hybrid collaborative filtering mechanism for product recommendation system." Multimed Tools Appl 83, 12775–12798 (2024). (SCI)',
    'Mandalapu, S.R., Narayanan, B. & Putheti, S. "Intelligent collaborative filtering recommendation system for movie review rating", JTAIT, Volume 101 Issue 15, Pages: 5942-5952 (2023).',
    'Mandalapu, S.R., Narayanan, B. & Putheti, S. "Job Recommendation System Using Deep Reinforcement Learning (DRL)", IJRITCC, 11(10s), 621–630 (2023). (Scopus)',
    'Sudhakar Putheti, Shaik Faamida, "A Novel Method for Network Intrusion Detection System Using Data Mining Methodologies", IJRECE (2020).',
    'K.Naga Gopi, D.Deepthi, P.Sudhakar, G.Rama Devi, "CAD For Lung Disease Detection Using Machine Learning Mechanism", IJGDC, Volume 13 Issue 1, Pages 2660–2666 (2020).',
    'S Putheti, KGR Narayan, "Comparative study of image colorization neural network models", Proceedings of NCRACSPA-2019, Taylor & Francis Group London (2020).',
    'P.Siva Parvathi, Sudhakar Putheti, "Analysis on Processing Remotely Distributed Data Stores with Cutting Edge Mining Techniques", IJDCST, Volume 6, Issue 1 (Nov 2018).',
    'Sudhakar Putheti et al., "A Real Time Approach For Secure Text Transmission Using Video Cryptography", AIPPR, Volume 1 Issue 2, Pages: 27-31 (May 2018).',
    'Sudhakar Putheti et al., "A Persistent Approach For Secure Text Transmission Utilizing Video Cryptography", IJCRT, Volume 6, Issue 1, Pages: 558-562 (March 2018).',
    'Vishnu Priya Nelluri et al., Sudhakar Putheti, "Motion Detection for Content Based Video Retrieval", AIPPR, Volume 1 Issue 1, Pages: 9-13 (Mar 2018).',
    'Vuppuluri Sai Lakshmi Usha, Dr. Sudhakar Putheti, "Privacy Preserving Ranked Fuzzy keyword searches for Multiple Data Owners in Cloud Computing", IJIRSET, Vol. 5, Issue 12, Pages: 20750-20754 (Dec 2016).',
    'Phani Kumar Talluri, Sudhakar Putheti, "Texture Analysis using Rough Texton", IJCA, Volume 145–No 14, Pages: 29-33 (July 2016).',
    'Krishnaveni Sadarajupalli, Sudhakar Putheti, "Rough Texton based Fundus Image Retrieval", IJCA, Volume 132–No 15, Pages: 19-25 (December 2015).',
    'Sudhakar Putheti, Mohan Krishna Kotha, Srinivasa Reddy Edara, "Supervised Content based Image Retrieval using Fuzzy Texton and Shearlet Transform", GJCST, Volume 15 Issue 1, Pages 15-22 (2015).',
    'Sharmila Shaik, Sudhakar P, Shaik Khaja Mohiddin, "A Novel Framework for Image Inpainting", IJCTT, Volume 14 Number 3 (Aug 2014).',
    'Sirisha Konakala and Sudhakar Putheti, "A Novel Threshold Technique and Fuzzy C-Means Algorithm for Segmentation of Wound", IJCA, Volume 84–No 7, Pages: 12-14 (December 2013).',
    'Venkata Ragha Deepthi Loka and Sudhakar Putheti, "Classification of Normal, Benign and Malignant Tissues using Fuzzy Texton and SVM in Mammographic Images", IJCA, Volume 82–No 15, Pages: 36-39 (November 2013).',
    'M Vijaya Sankar, Sudhakar Putheti, "Mobile Travel Guide – Smart Way to Travel", IJA Computing, Vol.46, Special Issue.2, Pages: 612–614 (October 2013).',
    'Sudhakar Putheti et al., "Fuzzy Textons Based Image Retrieval for Tissues in Mammograms", IJA Computing, Vol.46, Issue.4, Pages: 1387–1391 (October 2013).',
  ];

  const papers = activeTab === "conferences" ? conferences : journals;

  return (
    <section className="section research-section" id="research">
      <h2 className="section-title">Research Publications</h2>
      <p className="section-subtitle">
        Published in leading IEEE and Springer conferences and reputed
        international journals
      </p>

      <div className="research-tabs">
        <button
          className={`tab-btn ${activeTab === "conferences" ? "active" : ""}`}
          onClick={() => setActiveTab("conferences")}>
          <FaBookOpen /> Conference Papers ({conferences.length})
        </button>
        <button
          className={`tab-btn ${activeTab === "journals" ? "active" : ""}`}
          onClick={() => setActiveTab("journals")}>
          <FaFileAlt /> Journal Papers ({journals.length})
        </button>
      </div>

      <div className="papers-list">
        {papers.map((paper, i) => (
          <div className="paper-card" key={i}>
            <span className="paper-number">{i + 1}</span>
            <p>{paper}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Research;
