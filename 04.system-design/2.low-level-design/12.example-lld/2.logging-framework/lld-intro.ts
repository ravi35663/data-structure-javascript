/*
=>  Logging Framework:
    -   A logging framework is a software library/tool that provides a standardized way to record, 
        format, store, and manage application logs such as errors, warnings, requests, and 
        debugging information.

=>  Why do we need it:
    Debugging: Find the cause of errors and failures.
    Monitoring: Understand application health and behavior.
    Troubleshooting: Investigate production issues.
    Structured logs: Consistent format such as JSON, timestamps, log levels, etc.
    Log management: Control log levels, rotation, storage, and output destinations.

=>  Examples: Winston, Pino, Morgan (Node.js); Log4j (Java):  
*/
// Step: 1: Discuss functional requirements:
/*
1)  Log Levels with priority system:
    -   Support 5 log levels: (DEBUG, INFO, WARNING, ERROR, FETAL)
    -   Each level has a priority:  (DEBUG=1, INFO=2, WARNING=3, ERROR=4, FETAL=5)
    -   Only Log level priority >= configured level
    -   Example: If level is set to WARNING only WARNING, ERROR and FETAL are logged rest will be skipped

2)  Log Message Structure:
    -   Each log message contains: timestamp, level, message text and optional source
    -   Timestamp: When the log is created
    -   Level: Severity of the message like WARNING, FETAL and all.
    -   Message: What happened
    -   Source: Which class/method generated the log (optional)
    -   Example:
        Creates:    [2024-01-15 10:30:45] [ERROR] [PaymentService.processPayment] - Payment failed for user 123

3)  Multiple Output Destinations:
    -   Console: Display logs in the terminal/console (for developer)
    -   File: Save logs to a file (for production)
    -   Database: Store logs in database (for analysis)
    -   Same log message can go to multiple destinations simultaneously

4)  Configure System:
    -   Set logging level for entire application
    -   Choose which output destination to use
    -   Configure formatting rules
    -   Simple configure without complex filtering 

5)  Thread safety:
    -   Multiple threads can log simultaneously without data corruption
    -   No lost or mixed-up log messages
    -   Thread safe operations for all logging components:

6) Extensibility:
    -   Easy to add new output destinations: (email, network, cloud storage)
    -   Easy to add new log level if needed
    -   Easy to add custom formatting:

7)  Message formatting:
    -   Customize how log messages appears in output
    -   Control timestamp format, level display and message layout.
    -   Different formats for different destinations
*/

// Step 2: Non-Functional Requirements:
/*
=>  Non-Functional Requirements:
    -   Thread safety:  Handle concurrency logging without data corruption
    -   Performance:    Minimal overhead for logging operations
    -   Extensibility:  Easy to add new log levels and destinations
    -   Configurability:    Runtime configuration changes
    -   Memory Efficiency:  Reasonable memory usage.
*/
/*
=> Edge case: Design discussions:
    -   Multiple threads logging simultaneously (without in same lines)
    -   Invalid log levels or configurations
    -   File system full during file logging
    -   Database connection failure during database logging
*/ 

// Step 3: Identify core entities:
/*
1)  LogLevel:
    -   id: uuid [pk]
    -   ENUM: DEBUG, INFO, WARNING, ERROR, FATAL
    -   priority: int (for comparison)
    -   isGreaterOrEqual(other: LogLevel): boolean

2)  LogMessage:
    -   timestamp: Timestamp
    -   level: LogLevel
    -   message: string
    -   source: string(optional - class/method name)

3)  LogConfiguration:
    -   rootLevel: LogLevel
    // Sample configuration for the logging framework.
*/

// Step: 4:
/*
=>  Visualizing interaction flow: Main thing
1)  Basic Logging flow:
    -    Application creates log message ->
        ->  Logger processes message 
        ->  If message passes level check 
        ->  Logger sends to output destinations 
        ->  Each destination writes the message

2)  Configuration flow: (Real time):
    -   Application sets LogConfiguration 
        -> Logger updates its settings 
        -> All future logs follow new configuration

4)  Multi-threaded flow:
    -   Multiple threads create log message simultaneously
        ->  Thread-safe Logger processes each request
        ->  Each destination handles concurrent writes safely

5)  Formatting flow:
    -   LogMessage reaches destination
        ->  Destination formats message
        ->  Formatted message is written output

*/

