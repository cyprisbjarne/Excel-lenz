import React from "react";
import Sidebar from "../components/Sidebar";
import ProgressBar from "../components/ProgressBar";
import ChartPlaceholder from "../components/ChartPlaceholder";
import Card from "../components/Card";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="main">
        <header className="header">
          <div>
            <h1 className="title">Umsatzziel Fortschritt</h1>
            <p className="subtitle">Live Überblick über deine Performance</p>
          </div>

          <div className="badge">12 Tage Streak</div>
        </header>

        <section className="progressSection">
          <ProgressBar value={68} />
          <div className="progressMeta">
            <span>68% erreicht</span>
            <span>€136.000 / €200.000</span>
          </div>
        </section>

        <section className="chartCard">
          <ChartPlaceholder />
        </section>

        <section className="cards">
          <Card title="Status">Auf Kurs</Card>
          <Card title="Nächster Meilenstein">75% – €14.000 fehlen</Card>
          <Card title="Performance">+12% diese Woche</Card>
          <Card title="Zieltrend">Stark wachsend</Card>
        </section>
      </main>
    </div>
  );
}