// pages/architecture.js
import Head from "next/head";
import Image from "next/image";

export default function ArchitecturePage() {
  return (
    <>
      <Head>
        <title>Architecture | Ardia Health</title>
        <meta
          name="description"
          content="Ardia Health’s end-to-end architecture for clinical AI, agents, SRL and MCP — from data sources to experiences."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pb-20">
        {/* ---------------- HERO + THREE-PART FLOW + DIAGRAM ---------------- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <p className="text-teal-300 tracking-[0.3em] text-[11px] font-semibold">
            ARCHITECTURE
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
            AI-first, quantum-ready healthcare{" "}
            <span className="text-teal-300">architecture.</span>
          </h1>
          <p className="mt-4 max-w-3xl text-[15px] md:text-[17px] text-slate-300 leading-relaxed">
            Ardia Health sits between data sources and front-line care teams,
            transforming raw signals into clinical-grade insight using
            healthcare-tuned AI today and quantum acceleration tomorrow.
          </p>

          <div className="mt-10">
            <p className="text-teal-300 tracking-[0.28em] text-[11px] font-semibold uppercase">
              HIGH-LEVEL FLOW
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
              From data to intelligence to action.
            </h2>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1.1fr] items-stretch">
            {/* LEFT: THREE-PART FLOW */}
            <div className="space-y-4">
              <p className="text-[11px] tracking-[0.25em] text-slate-400 uppercase">
                THREE-PART CARE INTELLIGENCE FLOW
              </p>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="rounded-3xl border border-sky-500/60 bg-slate-950/80 px-4 py-4 flex gap-3">
                  <div className="mt-1">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20 border border-sky-400 text-sky-200 text-xs font-semibold">
                      1
                    </span>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-sky-100">
                      Data sources connect in.
                    </p>
                    <p className="mt-1 text-[12px] text-slate-300">
                      EHR / EMR, imaging systems, labs, claims, wearables and
                      patient apps stream data into Ardia through secure
                      connectors.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="rounded-3xl border border-emerald-500/60 bg-slate-950/80 px-4 py-4 flex gap-3">
                  <div className="mt-1">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-100 text-xs font-semibold">
                      2
                    </span>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-emerald-100">
                      The Ardia Intelligence Core transforms it.
                    </p>
                    <p className="mt-1 text-[12px] text-slate-300">
                      Ingestion, normalization, encryption and
                      healthcare-tuned AI engines (LLMs, vision models, signal
                      AI) convert raw signals into risk scores, predictions and
                      recommendations.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="rounded-3xl border border-amber-500/60 bg-slate-950/80 px-4 py-4 flex gap-3">
                  <div className="mt-1">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/20 border border-amber-400 text-amber-100 text-xs font-semibold">
                      3
                    </span>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-amber-100">
                      Care experiences &amp; quantum deliver impact.
                    </p>
                    <p className="mt-1 text-[12px] text-slate-300">
                      Clinical AI, diagnostics copilots, RPM dashboards,
                      precision health programs and device cloud analytics
                      surface intelligence today — while future quantum
                      workloads plug into the same core.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: ARCHITECTURE IMAGE */}
            <div className="relative">
              <div className="rounded-[32px] border border-slate-700/70 bg-slate-950/80 shadow-[0_32px_100px_rgba(0,0,0,0.9)] overflow-hidden">
                <div className="relative aspect-[4/3] w-full bg-slate-950">
                  {/* 
                    Make sure this file exists in /public/images and the name matches.
                    If you used a different filename, update the src below.
                  */}
                  <Image
                    src="/images/ardia-architecture-core.png"
                    alt="Ardia Intelligence Core architecture diagram"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
                <p className="px-5 pb-4 pt-3 text-[11px] text-slate-400">
                  A visual view of how Ardia connects data sources, the
                  intelligence core and care experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- SRL + MCP ARCHITECTURE BLOCK ---------------- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="relative rounded-[32px] border border-slate-700/70 bg-slate-950/80 shadow-[0_32px_100px_rgba(0,0,0,0.9)] backdrop-blur-xl px-4 sm:px-6 lg:px-10 py-10">
            {/* soft glow */}
            <div className="pointer-events-none absolute -inset-px rounded-[32px] bg-[radial-gradient(circle_at_0%_0%,rgba(45,212,191,0.25),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(129,140,248,0.25),transparent_55%)] opacity-40" />

            <div className="relative space-y-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <p className="text-teal-300 tracking-[0.3em] text-[11px] font-semibold">
                    HIGH-LEVEL FLOW
                  </p>
                  <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                    From raw signals to agents and experiences.
                  </h2>
                </div>
                <p className="max-w-xl text-xs md:text-sm text-slate-300">
                  Data flows from EHRs, devices and documents into Ardia’s
                  secure platform, where foundation models and agents operate
                  over an MCP tool layer. SRL continuously improves behaviour
                  from real-world feedback, while experiences stay simple for
                  clinicians and patients.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.05fr_1.4fr_1.05fr]">
                {/* COLUMN 1 - DATA SOURCES */}
                <div className="rounded-3xl border border-sky-600/60 bg-slate-900/90 p-5">
                  <h3 className="text-sm font-semibold text-sky-100 flex items-center gap-2 mb-3">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-sky-500/20 border border-sky-400/60 text-xs">
                      1
                    </span>
                    Data sources
                  </h3>
                  <p className="text-[11px] text-sky-100/80 mb-3">
                    Where clinical signals originate.
                  </p>
                  <ul className="space-y-1.5 text-[11px] text-slate-300">
                    <li>• EHR / EMR (FHIR, HL7: encounters, meds, notes)</li>
                    <li>• Imaging &amp; labs (DICOM, LIS/HL7)</li>
                    <li>• RPM &amp; wearables (REST / streaming APIs)</li>
                    <li>• Documents: visit summaries, letters, forms</li>
                    <li>• Patient-reported outcomes &amp; questionnaires</li>
                    <li>• Payer rules, benefits and prior auth criteria</li>
                  </ul>
                  <div className="mt-4 rounded-2xl border border-sky-500/40 bg-sky-950/60 px-3 py-2 text-[10px] text-sky-100/90">
                    <span className="font-semibold">Integration hub:</span> FHIR/HL7
                    gateways, queues and ETL pipelines normalise, validate and
                    de-identify data before it reaches Ardia.
                  </div>
                </div>

                {/* COLUMN 2 - INTELLIGENCE FABRIC */}
                <div className="rounded-3xl border border-emerald-500/70 bg-gradient-to-b from-slate-900 via-emerald-950/70 to-slate-950 p-5 space-y-4">
                  <h3 className="text-sm font-semibold text-emerald-100 flex items-center gap-2 mb-1">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/70 text-xs">
                      2
                    </span>
                    Ardia intelligence fabric
                  </h3>

                  {/* secure data platform */}
                  <div className="rounded-2xl border border-emerald-400/40 bg-slate-950/80 p-3 text-[11px] text-slate-200 space-y-1.5">
                    <p className="text-[11px] font-semibold text-emerald-200 mb-1">
                      Secure data platform
                    </p>
                    <ul className="space-y-1.5">
                      <li>
                        • Encrypted PHI store (S3/Blob) for raw docs, audio and
                        transcripts.
                      </li>
                      <li>
                        • Relational DB (Postgres) for structured clinical
                        entities.
                      </li>
                      <li>
                        • Vector store (pgvector / Pinecone / Weaviate) for
                        notes, guidelines and pathways.
                      </li>
                      <li>
                        • Audit/event log for every agent action and tool call.
                      </li>
                    </ul>
                  </div>

                  {/* models + tools */}
                  <div className="rounded-2xl border border-teal-400/50 bg-slate-950/85 p-3 text-[11px] text-slate-200 space-y-1.5">
                    <p className="text-[11px] font-semibold text-teal-200 mb-1">
                      Models, tools &amp; MCP layer
                    </p>
                    <ul className="space-y-1.5">
                      <li>
                        • Foundation LLMs: GPT-4.1 / GPT-4o plus Ardia-tuned
                        Llama / Mistral.
                      </li>
                      <li>
                        • Specialised models: Whisper, OCR and optional imaging
                        models.
                      </li>
                      <li>
                        • MCP tools: FHIR read/write, knowledge retrieval,
                        calculators, document generator, scheduling, billing
                        rules.
                      </li>
                      <li>
                        • Agents (documentation, prior-auth, patient explainer)
                        call MCP tools instead of hard-coded APIs.
                      </li>
                    </ul>
                  </div>

                  {/* SRL */}
                  <div className="rounded-2xl border border-lime-400/50 bg-slate-950/85 p-3 text-[11px] text-slate-200 space-y-1.5">
                    <p className="text-[11px] font-semibold text-lime-200 mb-1">
                      Supervised reinforcement learning (SRL)
                    </p>
                    <ul className="space-y-1.5">
                      <li>
                        • Capture de-identified transcripts, tool traces,
                        outputs and human edits.
                      </li>
                      <li>
                        • Train reward models on accuracy, safety, edit
                        distance and guideline compliance.
                      </li>
                      <li>
                        • Fine-tune models and tool-selection policies to
                        reduce clinician edits over time.
                      </li>
                      <li>
                        • Governance layer monitors for drift, bias and policy
                        violations.
                      </li>
                    </ul>
                  </div>

                  {/* future models */}
                  <div className="rounded-2xl border border-fuchsia-400/60 bg-slate-950/90 p-3 text-[11px] text-slate-200">
                    <p className="text-[11px] font-semibold text-fuchsia-200 mb-1">
                      Future-ready for more general models
                    </p>
                    <p>
                      Agents are model-agnostic. As more powerful
                      “near-AGI” models arrive, Ardia can plug them into the
                      same MCP tool layer without changing integrations or
                      experiences.
                    </p>
                  </div>
                </div>

                {/* COLUMN 3 - EXPERIENCES */}
                <div className="rounded-3xl border border-indigo-500/70 bg-slate-900/90 p-5">
                  <h3 className="text-sm font-semibold text-indigo-100 flex items-center gap-2 mb-3">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-indigo-500/20 border border-indigo-400/70 text-xs">
                      3
                    </span>
                    Experiences &amp; integrations
                  </h3>
                  <p className="text-[11px] text-indigo-100/80 mb-3">
                    Where patients, providers and partners feel the value.
                  </p>
                  <ul className="space-y-1.5 text-[11px] text-slate-300">
                    <li>
                      • Clinical AI in the EHR: ambient notes, coding
                      suggestions, prior auth drafts, discharge summaries.
                    </li>
                    <li>
                      • Patient experiences: upload a document and get simple
                      explanations, visit prep and after-visit summaries.
                    </li>
                    <li>
                      • RPM dashboards: combine device, symptom and narrative
                      data for chronic programs.
                    </li>
                    <li>
                      • Payer/employer views: structured justifications, review
                      support and trend analytics (with PHI controls).
                    </li>
                    <li>
                      • API &amp; MCP endpoints for partners and future quantum
                      workloads.
                    </li>
                  </ul>
                  <div className="mt-4 rounded-2xl border border-indigo-400/50 bg-indigo-950/60 px-3 py-2 text-[10px] text-indigo-100/90">
                    <span className="font-semibold">
                      Governance &amp; security:
                    </span>{" "}
                    tenant isolation, encryption, RBAC, consent and full audit
                    for HIPAA, SOC2 and payer requirements.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- MODELS / TOOLS / DATA RESIDENCY ---------------- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="rounded-[28px] border border-slate-700/70 bg-slate-950/90 px-5 sm:px-7 lg:px-10 py-7 grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-teal-300 tracking-[0.3em] text-[11px] font-semibold">
                MODELS
              </p>
              <h3 className="mt-2 text-lg font-semibold">
                Foundation models for Ardia.
              </h3>
              <ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
                <li>• GPT-4.1 / GPT-4o for complex reasoning and drafting.</li>
                <li>• Llama / Mistral variants fine-tuned with Ardia SRL.</li>
                <li>
                  • Whisper and speech models for ambient documentation in
                  clinic and telehealth.
                </li>
                <li>• OCR &amp; layout models for scanned forms and PDFs.</li>
              </ul>
            </div>

            <div>
              <p className="text-teal-300 tracking-[0.3em] text-[11px] font-semibold">
                TOOLS &amp; MCP
              </p>
              <h3 className="mt-2 text-lg font-semibold">
                Tool-centric agent layer.
              </h3>
              <ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
                <li>• MCP server exposing FHIR, search, calculators, templates.</li>
                <li>
                  • Agents choose tools via policies trained with SRL instead of
                  hard-coded flows.
                </li>
                <li>• Web, mobile and EHR plugins act as MCP clients.</li>
                <li>• All tool calls logged for audit and improvements.</li>
              </ul>
            </div>

            <div>
              <p className="text-teal-300 tracking-[0.3em] text-[11px] font-semibold">
                DATA &amp; RESIDENCY
              </p>
              <h3 className="mt-2 text-lg font-semibold">
                Built for global regulations.
              </h3>
              <ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
                <li>• Region-locked PHI storage and compute (US, EU, etc.).</li>
                <li>• Configurable routing to external vs in-house models.</li>
                <li>
                  • De-identification pipelines for SRL training data and
                  analytics.
                </li>
                <li>
                  • Fine-grained permissions by organisation, group and role.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
