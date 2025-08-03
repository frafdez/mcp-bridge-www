---
layout: marketing-home

# SEO and metadata
title: "Deploy STDIO MCP Servers to the Cloud | Instant API Access | ChatterKB"
description: "Transform local STDIO-based MCP tools into scalable HTTP APIs. Built for AI developers, agent creators, and LLM workflows."

# Page content
hero:
  title: "Host Your Local MCP Tools in the Cloud"
  split_title:
    main: "Host Your Local MCP Tools in the Cloud"
    highlight: "Effortlessly."
  description: "Deploy your STDIO-based MCP tools to a dedicated cloud instance with a secure HTTP interface. No code changes required. Built for AI developers and agent workflows."
  image: "/assets/images/marketing/mcp-hero.png"
  primary_button:
    text: "Contact Us"
    url: "mailto:hello@chatterkb.com?subject=MCP%20Hosting%20Inquiry"
  secondary_button:
    text: "Book 15-Min Demo"
    url: "https://calendar.app.google/JJRTkNDZ6fZ5tLicA"

problems:
  section_title: "Unlock Your MCP Tools from Desktop Limitations"
  items:
    - title: "Break Free from STDIO Constraints"
      description: "Your powerful MCP tools are trapped in STDIO, limiting their potential. While perfect for Claude, Gemini, and OpenAI on desktop, they're inaccessible to cloud agents, automation workflows, and distributed teams. We bridge that gap."
    - title: "Skip the OAuth Complexity"
      description: "Cloud MCP solutions often force you into OAuth implementation headaches. Our service provides enterprise-grade security with simple Bearer token authentication—getting you from development to deployment in minutes instead of weeks."
    - title: "Scale Without the Infrastructure Nightmare"
      description: | 
        Why build complex infrastructure when you need to scale? Our HTTP bridge layer turns your single-process STDIO tools into scalable APIs that handle concurrent requests, support multiple teams, and integrate seamlessly with agent workflows. Focus on your tools, not your infrastructure.

# Features Section
_features:
  tagline: "CODE • DEPLOY • FORGET"
  title: "Hassle-Free MCP Hosting"
  items:
    - icon: "bi-cloud-fill"
      title: "Zero Infrastructure Hassles"
      description: "Dedicated server, static IP, HTTPS - all setup and managed for you. Focus on your tools, not your server."
      image: "/assets/images/marketing/index-step-1.png"
    - icon: "bi-tools"
      title: "Run Multiple Tools Together"
      description: "Host as many MCP tools as you need on one instance. Perfect for building complex AI workflows."
    - icon: "bi-shield-lock-fill"
      title: "Simple Security"
      description: "One bearer token to access everything. No OAuth complexity, no API key rotation headaches."
    - icon: "bi-code-slash"
      title: "Works Like Your Local Setup"
      description: "Same MCP protocol you already know, but accessible anywhere. Streaming responses work perfectly too."


features:
  section_title: "CODE • DEPLOY • FORGET"
  title: "Hassle-Free MCP Hosting"
  items:
    - side: left
      title: Run Multiple Tools Together
      description: Host as many MCP tools as you need on one instance. Perfect for building complex AI workflows.
      image: /assets/images/marketing/index-step-1.png
      bullets:
        - Combines all your MCP servers into one streamable HTTP endpoint
        - Aggregates all your tools into one server
        - Easy tool calling: each server is scoped using servername.tool
    - side: right
      title: Works Like Your Local Setup
      description: Same MCP protocol you already know, but accessible anywhere. Streaming responses work perfectly too.
      image: /assets/images/marketing/index-step-2.png
      bullets:
        - Use the same MCP servers you would with your desktop apps like Claude Desktop, Cursor, VSCode, and ChatGPT
        - Copy and paste your servers into the servers list with your client tokens
        - Securely stored on your dedicated AWS EC2 instance
    - side: left
      title: Detailed Logging
      description: Unified logging for each MCP server
      image: /assets/images/marketing/index-step-3.png
      bullets:
        - Track down errors with your MCP servers
        - Keep track of when each tool is called
    - side: right
      title: Hassle-Free Authentication
      description: Keep your servers secure using Bearer authentication
      code: |
        curl -X POST "https://your-server.chatterkb.com" \
          -H "Content-Type: application/json" \
          -H "Authorization: Bearer YOUR_TOKEN_HERE" \
          -d '{
            "jsonrpc": "2.0",
            "id": "1",
            "method": "tools/list",
            "params": {}
          }'

          # Or, less secure but effective in a trusted environment:
          https://your-server.chatterkb.com/YOUR_TOKEN_HERE

      bullets:
        - Developer-friendly token authentication
        - Support for inline URL authentication
        - Tokens can be reset at any time

# Pricing Section
pricing:
  title: "Straightforward Pricing"
  description: "No hidden fees, no surprises. Just predictable pricing that grows with your usage."
  tiers:
    - name: "Starter"
      price: "$39"
      period: "/mo"
      description: "For tinkerers and side projects"
      features:
        - "Dedicated t2.small instance"
        - "8GB storage for tool data"
        - "30,000 tool calls per month"
        - "Static IP and HTTPS encryption"
        - "Bearer token authentication"
        - "Email support"
      button_text: "Contact Us"
      button_url: "mailto:hello@chatterkb.com?subject=MCP%20Hosting%20Starter%20Plan%20Inquiry"
    - name: "Pro"
      price: "$89"
      period: "/mo"
      description: "For serious builders and small teams"
      popular: true
      features:
        - "Dedicated t2.medium instance"
        - "8GB storage for tool data"
        - "100,000 tool calls per month"
        - "Static IP and HTTPS encryption"
        - "Bearer token authentication"
        - "Priority email support"
        - "Integration guidance"
      button_text: "Contact Us"
      button_url: "mailto:hello@chatterkb.com?subject=MCP%20Hosting%20Pro%20Plan%20Inquiry"
    - name: "Scale"
      price: "$159"
      period: "/mo"
      description: "For production use cases and growth"
      features:
        - "Dedicated t2.large instance"
        - "8GB storage for tool data"
        - "250,000 tool calls per month"
        - "Static IP and HTTPS encryption"
        - "Bearer token authentication"
        - "IP restrictions (optional)"
        - "Priority email support"
        - "Custom integration support"
      button_text: "Contact Us"
      button_url: "mailto:hello@chatterkb.com?subject=MCP%20Hosting%20Scale%20Plan%20Inquiry"
  notes: "All plans include a dedicated server instance and premium support. Need a custom plan? Contact us for enterprise options."


# Self-Service Coming Soon
self_service:
  title: "Self-Service Portal Coming Soon"
  form_title: "Join the Waitlist"
  description: "For DIY types, we're building a console where you can deploy and manage your MCP tools without waiting for manual setup."
  note: "Be the first to know when our self-service platform launches. No spam, just important updates."


# CTA Section
cta:
  title: "Ready for Production-Grade MCP Hosting?"
  description: "Turn your local tools into scalable APIs. We handle the servers, security, and setup so you can focus on building."
  image: "/assets/images/marketing/mcp-hero.png"
  primary_button:
    text: "Contact Us"
    url: "mailto:hello@chatterkb.com?subject=MCP%20Hosting%20Inquiry"
  secondary_button:
    text: "Book 15-Min Demo"
    url: "https://calendar.app.google/JJRTkNDZ6fZ5tLicA"
---