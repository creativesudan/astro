// MatchMaking.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MatchMaking() {
  const [savedKundlis, setSavedKundlis] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/kundli");
        setSavedKundlis(res.data || []);
      } catch (e) {
        console.error("Error fetching kundlis:", e);
      }
    })();
  }, []);

  const handleSelect = (id) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length < 2) return [...prev, id];
      return prev;
    });
  };

  const runMatchmaking = async () => {
    setErr("");
    setResult(null);
    if (selectedIds.length !== 2) {
      setErr("Please select exactly two records.");
      return;
    }
    try {
      setLoading(true);
      const sortedIds = [...selectedIds].sort((a,b)=>a-b); // always send in ascending order
      const res = await axios.get(
        `http://localhost:8000/api/matchmaking?ids=${sortedIds.join(",")}`
      );
      setResult(res.data);
    } catch (e) {
      setErr(e?.response?.data?.error || "Failed to calculate matchmaking");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif", maxWidth: 1000, margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>💖 Match Making</h2>

      {/* Kundli Selection */}
      <div style={{ marginBottom: 20, padding: 10, border: "1px solid #ccc", borderRadius: 8, background: "#f9f9f9" }}>
        <h4>Select Two Kundlis:</h4>
        {savedKundlis.map((k) => (
          <label
            key={k.id}
            style={{
              display: "block",
              marginBottom: 6,
              padding: 6,
              borderRadius: 4,
              cursor: "pointer",
              background: selectedIds.includes(k.id) ? "#d1e7dd" : "#fff",
              border: selectedIds.includes(k.id) ? "1px solid #0f5132" : "1px solid #ccc",
            }}
          >
            <input
              type="checkbox"
              checked={selectedIds.includes(k.id)}
              onChange={() => handleSelect(k.id)}
              disabled={selectedIds.length >= 2 && !selectedIds.includes(k.id)}
              style={{ marginRight: 8 }}
            />
            <strong>#{k.id} — {k.name}</strong> ({k.gender}) — {k.place}
          </label>
        ))}
      </div>

      <button
        onClick={runMatchmaking}
        disabled={loading || selectedIds.length !== 2}
        style={{
          padding: "8px 16px",
          fontSize: 16,
          background: "#0d6efd",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: loading || selectedIds.length !== 2 ? "not-allowed" : "pointer",
          transition: "background 0.2s",
        }}
      >
        {loading ? "Calculating..." : "Calculate Gun Milan"}
      </button>

      {err && <p style={{ color: "red", marginTop: 10 }}>{err}</p>}

      {/* Matchmaking Result */}
      {result?.success && (
        <div style={{ marginTop: 30 }}>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {/* Groom Card */}
            <div style={{ flex: 1, minWidth: 300, padding: 16, border: "1px solid #ccc", borderRadius: 8, background: "#fff" }}>
              <h3 style={{ marginBottom: 10 }}>👦 Groom: {result.pair.groom.name}</h3>
              <p><strong>Gender:</strong> {result.pair.groom.gender}</p>
              <p><strong>Moon Sign:</strong> {result.pair.groom.moon.sign}, Nakshatra: {result.pair.groom.moon.nakshatra} (Pada {result.pair.groom.moon.charan})</p>
              <p><strong>Gana:</strong> {result.pair.groom.moon.gana}</p>
              <p><strong>Nadi:</strong> {result.pair.groom.moon.nadi}</p>
              <p><strong>Yoni:</strong> {result.pair.groom.moon.yoni}</p>
              <p><strong>Lord:</strong> {result.pair.groom.moon.lord}</p>
            </div>

            {/* Bride Card */}
            <div style={{ flex: 1, minWidth: 300, padding: 16, border: "1px solid #ccc", borderRadius: 8, background: "#fff" }}>
              <h3 style={{ marginBottom: 10 }}>👧 Bride: {result.pair.bride.name}</h3>
              <p><strong>Gender:</strong> {result.pair.bride.gender}</p>
              <p><strong>Moon Sign:</strong> {result.pair.bride.moon.sign}, Nakshatra: {result.pair.bride.moon.nakshatra} (Pada {result.pair.bride.moon.charan})</p>
              <p><strong>Gana:</strong> {result.pair.bride.moon.gana}</p>
              <p><strong>Nadi:</strong> {result.pair.bride.moon.nadi}</p>
              <p><strong>Yoni:</strong> {result.pair.bride.moon.yoni}</p>
              <p><strong>Lord:</strong> {result.pair.bride.moon.lord}</p>
            </div>
          </div>

          {/* Gun Milan Table */}
          <h3 style={{ marginTop: 30, marginBottom: 10, textAlign: "center" }}>
            📝 Gun Milan (8 Koot) – Total {result.total.points}/{result.total.max} ({result.total.percent}%)
          </h3>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#fff",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          >
            <thead style={{ background: "#0d6efd", color: "#fff" }}>
              <tr>
                <th style={{ padding: 10 }}>Koot</th>
                <th style={{ padding: 10, textAlign: "center"  }}>Max</th>
                <th style={{ padding: 10, textAlign: "center"  }}>Points</th>
                <th style={{ padding: 10 }}>Details</th>
              </tr>
            </thead>
            <tbody>
              {result.koots.map((k, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #ddd"}}>
                  <td style={{ padding: 8 }}>{k.name}</td>
                  <td style={{ padding: 8, textAlign: "center"  }}>{k.max}</td>
                  <td style={{ padding: 8, textAlign: "center"  }}>{k.points}</td>
                  <td style={{ padding: "8px 12px", fontSize: 12, whiteSpace: "pre-line", textAlign: "left" }}>
                    {Object.entries(k.details || {}).map(([a, b]) => `${a}: ${b}`).join(" | ")}
                  </td>
                </tr>
              ))}
              <tr style={{ fontWeight: "bold", background: "#f1f1f1" }}>
                <td style={{ padding: 8 }}>Total</td>
                <td style={{ padding: 8, textAlign: "center"  }}>{result.total.max}</td>
                <td style={{ padding: 8, textAlign: "center"  }}>{result.total.points}</td>
                <td style={{ padding: 8 }}>{result.total.percent}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
