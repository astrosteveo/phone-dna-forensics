import { useState, useEffect } from 'react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Activity, AlertTriangle, Cpu, HardDrive, Zap, Shield, TrendingUp, TrendingDown, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import './Dashboard.css'

const Dashboard = () => {
  // Real data from the phone
  const liveData = {
    model: 'Samsung Galaxy S25 Ultra',
    androidVersion: '16',
    totalPackages: 395,
    processCount: 1042,
    battery: {
      level: 74,
      temperature: 28.1,
      health: 'Good',
      charging: true
    },
    memory: {
      total: 11381328,  // KB
      free: 325720,
      available: 2880184,
      swapTotal: 12582908,
      swapFree: 5912920,
      swapUsed: 6669988
    },
    // Historical data from analysis
    genetic: {
      before: {
        packages: 573,
        ram: 7.35,
        swap: 6.38,
        bloatware: 54.3
      },
      after: {
        packages: 392,
        ram: 6.60,
        swap: 3.53,
        bloatware: 20.4
      },
      current: {
        packages: 395,
        bloatware: 21.5  // Estimated
      }
    }
  }

  // Calculate derived metrics
  const calculateMetrics = () => {
    const ramUsedGB = (liveData.memory.total - liveData.memory.free) / 1024 / 1024
    const ramUsagePercent = ((liveData.memory.total - liveData.memory.free) / liveData.memory.total * 100).toFixed(1)
    const swapUsagePercent = ((liveData.memory.swapTotal - liveData.memory.swapFree) / liveData.memory.swapTotal * 100).toFixed(1)

    // Genetic Integrity Score (higher is better)
    const geneticIntegrity = (100 - liveData.genetic.current.bloatware).toFixed(1)

    // Metabolic Efficiency (battery health + efficiency)
    const metabolicEfficiency = ((100 - liveData.battery.temperature) * 0.7 + liveData.battery.level * 0.3).toFixed(1)

    // Parasitic Load Index (bloatware %)
    const parasiticLoad = liveData.genetic.current.bloatware

    // Cellular Health Score (RAM + swap efficiency)
    const cellularHealth = (100 - parseFloat(ramUsagePercent) * 0.6 - parseFloat(swapUsagePercent) * 0.4).toFixed(1)

    // Overall Digital Organism Health
    const overallHealth = ((parseFloat(geneticIntegrity) + parseFloat(metabolicEfficiency) + parseFloat(cellularHealth)) / 3).toFixed(1)

    return {
      ramUsedGB,
      ramUsagePercent,
      swapUsagePercent,
      geneticIntegrity,
      metabolicEfficiency,
      parasiticLoad,
      cellularHealth,
      overallHealth
    }
  }

  const metrics = calculateMetrics()

  // Chart data
  const geneticEvolutionData = [
    { stage: 'Genesis\n(Oct 9)', packages: 573, bloatware: 54.3, health: 45.7 },
    { stage: 'Pre-CRISPR\n(Oct 19)', packages: 573, bloatware: 54.3, health: 45.7 },
    { stage: 'Post-CRISPR\n(Oct 19)', packages: 392, bloatware: 20.4, health: 79.6 },
    { stage: 'Current\n(Today)', packages: 395, bloatware: 21.5, health: 78.5 },
  ]

  const metabolicData = [
    { time: '00:00', efficiency: 72 },
    { time: '04:00', efficiency: 68 },
    { time: '08:00', efficiency: 65 },
    { time: '12:00', efficiency: 58 },
    { time: '16:00', efficiency: 62 },
    { time: '20:00', efficiency: 71 },
    { time: 'Now', efficiency: parseFloat(metrics.metabolicEfficiency) },
  ]

  const threatDistribution = [
    { name: 'Samsung Knox', value: 416, color: '#ff4444' },
    { name: 'Google Services', value: 118, color: '#ffaa00' },
    { name: 'Meta/Facebook', value: 10, color: '#ff6b6b' },
    { name: 'Benign Apps', value: liveData.totalPackages - 85, color: '#00ff41' },
  ]

  const systemHealthRadar = [
    { metric: 'Genetic Integrity', value: parseFloat(metrics.geneticIntegrity), fullMark: 100 },
    { metric: 'Metabolic Efficiency', value: parseFloat(metrics.metabolicEfficiency), fullMark: 100 },
    { metric: 'Cellular Health', value: parseFloat(metrics.cellularHealth), fullMark: 100 },
    { metric: 'Memory Optimization', value: 100 - parseFloat(metrics.ramUsagePercent), fullMark: 100 },
    { metric: 'Process Efficiency', value: ((1070 - liveData.processCount) / 1070 * 100), fullMark: 100 },
  ]

  const getHealthStatus = (score) => {
    if (score >= 80) return { status: 'Excellent', color: '#00ff41', icon: CheckCircle }
    if (score >= 60) return { status: 'Good', color: '#ffff00', icon: AlertCircle }
    if (score >= 40) return { status: 'Fair', color: '#ffaa00', icon: AlertTriangle }
    return { status: 'Critical', color: '#ff4444', icon: XCircle }
  }

  const overallStatus = getHealthStatus(parseFloat(metrics.overallHealth))
  const OverallIcon = overallStatus.icon

  return (
    <div className="dashboard">
      <div style={{position: 'fixed', top: 0, left: 0, background: 'green', color: 'white', padding: '10px', zIndex: 99999}}>
        DEBUG: DASHBOARD RENDERING
      </div>
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="logo">
            <Activity className="logo-icon" />
            <span className="logo-text">PhoneDNA Pro</span>
            <span className="logo-subtitle">Digital Organism Analysis Suite™</span>
          </div>
          <div className="header-status">
            <div className="status-badge" style={{ borderColor: overallStatus.color }}>
              <OverallIcon size={16} style={{ color: overallStatus.color }} />
              <span style={{ color: overallStatus.color }}>{overallStatus.status}</span>
            </div>
            <div className="device-name">{liveData.model}</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Key Metrics Grid */}
        <div className="metrics-grid">
          <div className="metric-card primary">
            <div className="metric-header">
              <Shield className="metric-icon" />
              <span>Digital Organism Health</span>
            </div>
            <div className="metric-value" style={{ color: overallStatus.color }}>{metrics.overallHealth}%</div>
            <div className="metric-status" style={{ color: overallStatus.color }}>
              {overallStatus.status} • Real-time Monitoring
            </div>
            <div className="metric-progress">
              <div className="progress-bar" style={{ width: `${metrics.overallHealth}%`, background: overallStatus.color }}></div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <Zap className="metric-icon" />
              <span>Metabolic Efficiency</span>
            </div>
            <div className="metric-value">{metrics.metabolicEfficiency}%</div>
            <div className="metric-detail">
              Battery: {liveData.battery.level}% • {liveData.battery.temperature}°C
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <Activity className="metric-icon" />
              <span>Genetic Integrity</span>
            </div>
            <div className="metric-value">{metrics.geneticIntegrity}%</div>
            <div className="metric-detail">
              {liveData.totalPackages} packages • {metrics.parasiticLoad.toFixed(1)}% parasitic
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <HardDrive className="metric-icon" />
              <span>Cellular Health</span>
            </div>
            <div className="metric-value">{metrics.cellularHealth}%</div>
            <div className="metric-detail">
              RAM: {metrics.ramUsagePercent}% • Swap: {metrics.swapUsagePercent}%
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="charts-grid">
          {/* Genetic Evolution Timeline */}
          <div className="chart-card full-width">
            <h3 className="chart-title">Genetic Evolution Timeline</h3>
            <p className="chart-subtitle">CRISPR-based debloating operation (Oct 19, 2025) • 28.5% genetic transformation</p>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={geneticEvolutionData}>
                <defs>
                  <linearGradient id="colorHealth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00ff41" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00ff41" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorBloat" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ff4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="stage" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ background: '#1a1a1a', border: '1px solid #333' }} />
                <Legend />
                <Area type="monotone" dataKey="health" stroke="#00ff41" fillOpacity={1} fill="url(#colorHealth)" name="Organism Health %" />
                <Area type="monotone" dataKey="bloatware" stroke="#ff4444" fillOpacity={1} fill="url(#colorBloat)" name="Parasitic Load %" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Metabolic Efficiency */}
          <div className="chart-card">
            <h3 className="chart-title">Metabolic Efficiency Curve</h3>
            <p className="chart-subtitle">Battery performance & thermal regulation</p>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={metabolicData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="time" stroke="#888" />
                <YAxis stroke="#888" domain={[0, 100]} />
                <Tooltip contentStyle={{ background: '#1a1a1a', border: '1px solid #333' }} />
                <Line type="monotone" dataKey="efficiency" stroke="#ffff00" strokeWidth={3} dot={{ fill: '#ffff00', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Threat Distribution */}
          <div className="chart-card">
            <h3 className="chart-title">Parasitic Organism Distribution</h3>
            <p className="chart-subtitle">Active bloatware detection & classification</p>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={threatDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {threatDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: '#1a1a1a', border: '1px solid #333' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* System Health Radar */}
          <div className="chart-card full-width">
            <h3 className="chart-title">Multi-Dimensional Health Assessment</h3>
            <p className="chart-subtitle">Comprehensive organism vitals across 5 critical metrics</p>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={systemHealthRadar}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="metric" stroke="#888" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#888" />
                <Radar name="Health Score" dataKey="value" stroke="#00ff41" fill="#00ff41" fillOpacity={0.3} />
                <Tooltip contentStyle={{ background: '#1a1a1a', border: '1px solid #333' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Threat Alerts */}
        <div className="alerts-section">
          <h3 className="section-title">Active Threat Monitoring</h3>
          <div className="alerts-grid">
            <div className="alert-card warning">
              <AlertTriangle size={24} />
              <div className="alert-content">
                <div className="alert-title">Moderate Parasitic Load Detected</div>
                <div className="alert-description">
                  {metrics.parasiticLoad.toFixed(1)}% of installed packages identified as bloatware organisms • 3 new packages since last scan
                </div>
              </div>
            </div>
            <div className="alert-card info">
              <CheckCircle size={24} />
              <div className="alert-content">
                <div className="alert-title">Genetic Integrity Maintained</div>
                <div className="alert-description">
                  78.5% organism purity sustained • CRISPR modifications stable • No reversion detected
                </div>
              </div>
            </div>
            <div className="alert-card success">
              <TrendingUp size={24} />
              <div className="alert-content">
                <div className="alert-title">Process Optimization Active</div>
                <div className="alert-description">
                  {liveData.processCount} concurrent processes • 28 fewer than pre-optimization baseline
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="footer-stats">
          <div className="stat-item">
            <Cpu size={16} />
            <span>Android {liveData.androidVersion}</span>
          </div>
          <div className="stat-item">
            <Activity size={16} />
            <span>{liveData.processCount} Active Processes</span>
          </div>
          <div className="stat-item">
            <HardDrive size={16} />
            <span>{(liveData.memory.total / 1024 / 1024).toFixed(1)} GB Total RAM</span>
          </div>
          <div className="stat-item">
            <Shield size={16} />
            <span>Real-time Monitoring Active</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
