Secret Story Encryptor v2.0
A cyberpunk-styled web application that transforms encrypted messages into compelling, thematic stories. Convert your secret messages into readable narratives using domain-specific vocabulary, making encryption both secure and engaging.

![Secret Story Encryptor Banner](https://img.shields.io/badge/Secretitary-grade encryption using CryptoJS

Password Protection: Secure your messages with custom passwords

Self-Destruct Timer: Automatically erases decrypted secrets after specified time

Secure Story Format: Encrypted data disguised as readable narratives

🎨 Theming & Customization
Multiple Themes: Choose from 4 distinct vocabulary themes:

General: Everyday words and common phrases

Physics: Scientific and physics terminology

Computer Science: Programming and tech vocabulary

Astronomy: Space and celestial terms

Multiple Visual Styles:

Cyberpunk Green (default)

Retro Terminal

Neon Cyberpunk

Steampunk

Sci-Fi Space

Modern Light

Cloudy Sky

Story Styles: Short, Long, or Poetic narrative generation

🛡️ Enhanced Security Features
Theme Markers: Automatic theme detection for seamless decryption

Signature Verification: Cryptographic signatures prevent tampering

URL-Safe Encoding: Compatible with all messaging platforms

Seeded Randomization: Deterministic word selection for consistent decryption

What's New in Version 2.0
🆕 Major Improvements from v1.0
Multi-Theme Support
v1.0: Single general vocabulary wordset

v2.0: Four distinct thematic wordsets with automatic detection

Enhanced Security
v1.0: Basic AES encryption with simple signatures

v2.0: Advanced signature system with theme markers and tamper detection

Better User Experience
v1.0: Fixed green terminal aesthetic

v2.0: Multiple visual themes with CSS customization options

Improved Reliability
v1.0: Basic error handling

v2.0: Comprehensive error detection and user-friendly alerts

Advanced Word Mapping
v1.0: Simple word-to-base64 mapping

v2.0: Sophisticated block-based mapping with deterministic randomization

Enhanced Story Generation
v1.0: Basic paragraph structure

v2.0: Advanced narrative generation with varied sentence and paragraph lengths

Better Compatibility
v1.0: Standard base64 encoding

v2.0: URL-safe base64 for universal platform compatibility

Technical Architecture
Encryption Process
Input Validation: Validates user input and password strength

AES Encryption: Encrypts plaintext using CryptoJS AES-256

Theme Selection: Applies selected vocabulary theme

Story Generation: Converts encrypted data to themed narrative

Signature Addition: Adds cryptographic signature for verification

Decryption Process
Theme Detection: Automatically detects theme from story markers

Signature Verification: Validates story integrity

Word Mapping: Reconstructs base64 from themed vocabulary

AES Decryption: Decrypts data using provided password

Output Display: Shows decrypted message with optional self-destruct