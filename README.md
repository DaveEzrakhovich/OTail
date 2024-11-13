# OTail - OpenTelemetry Tail Sampling Configuration UI

OTail is a user-friendly web interface for creating and managing OpenTelemetry tail sampling processor configurations. It provides a visual way to configure complex sampling policies without having to write YAML directly.

## Features

- **Visual Policy Configuration**: Easily create and manage sampling policies through an intuitive UI
- **Real-time YAML Preview**: See the generated YAML configuration update in real-time
- **Multiple Policy Types Support**:
  - Probabilistic Sampling
  - Rate Limiting
  - Status Code Based
  - String Attribute
  - Numeric Attribute
  - Latency Based
  - Always Sample
  - Boolean Attribute
  - Composite (AND/OR)
  - OTTL Condition
  - Span Count
  - Trace State

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with React and TypeScript
- Uses Monaco Editor for YAML editing
- Inspired by OpenTelemetry Collector configuration needs

## Roadmap

- [ ] Dark mode support
- [ ] Configuration persistence
- [ ] Policy grouping and organization
- [ ] Test sampling policy with real OTEL data
